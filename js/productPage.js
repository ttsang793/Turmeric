const page = {current: 1, numOfProducts: 9};
const content = document.querySelector(".danh-sach");
let filter = {searchString: "", priceMin: 0, priceMax: 0, searchBrand: [], index: 0}

window.onload = () => {
    const urlParam = new URLSearchParams(location.search);
    filter.searchString = urlParam.get('search');

    filterProduct(filter);

    productsList = JSON.parse(localStorage.getItem("productsList"));
    setPage();
    loadThuongHieu();
    //loadLoaiSanPham();
}

function setPage(current = page.current, numOfProducts = page.numOfProducts) {
    page.current = current;
    page.numOfProducts = numOfProducts;
    renderPage();
}

function renderPage() {
    if (productsList === null || productsList.length === 0) {
        content.style.display = "initial";
        content.innerHTML = `
            <div class="text-center" style="margin: 100px 0">
                <h1 class="text-center">Không có sản phẩm. Vui lòng thử lại</h1>
                <img src="https://media.tenor.com/v_W_gDtULNwAAAAi/confused-face.gif" alt="">
            </div>
        `
        document.getElementById("page").innerHTML = "";
        return;
    }

    let start = page.numOfProducts * (page.current - 1);
    let end = Math.min(page.numOfProducts * page.current, productsList.length);
    content.style.display = "flex";
    let contentDetail = "";

    for (let i=start; i<end; i++) {
        contentDetail += `
            <div id="chi-tiet" class="chi-tiet">
                <div class="hinh-san-pham">
                    <img src="${productsList[i].img}" alt="" onclick="showInfo(${productsList[i].id})">
                </div>
                <div class="ten-san-pham pt-3" onclick="showInfo(${productsList[i].id})">
                    ${productsList[i].name}
                </div>
                <div class="gia">${getGia(productsList[i].price)}</div>

                <div class="input-group mb-3 justify-content-center pt-3">
                    <input type="number" name="" value="1" min="1" max="" class="amount amount-page text-center">
                    <button class="btn btn-warning" onclick="addToCart(${productsList[i].id}, ${i%page.numOfProducts})">
                        <i class="bi bi-cart"></i>
                    </button>
                </div>
            </div>
        `;
        content.innerHTML = contentDetail;
    }
    renderNumber();
}

function renderNumber() {
    let bottom = '';
    for (let i=1; i<=Math.ceil(productsList.length / page.numOfProducts); i++) {
        bottom += `
            <button class="btn btn-outline-danger" value="${i}" onclick="setPage(this.value)">${i}</button>
        `;
        document.getElementById("page").innerHTML = bottom;
    }

    document.querySelectorAll("#page .btn").forEach(button => {
        if (button.value !== `${page.current}`) {
            button.style.backgroundColor = "white";
            button.style.color = "var(--bs-danger)";
        }
        else {
            button.style.backgroundColor = "var(--bs-danger)";
            button.style.color = "white";
        }
    });
}

function getProduct(id) {
    for (let i=0; i<productsList.length; i++)
        if (productsList[i].id === `${id}`) return productsList[i];
    return null;
}

function sort(index) {
    filter.index = index;
    filterProduct(filter);
    
    productsList = JSON.parse(localStorage.getItem("productsList"));
    setPage();
}

function locGia() {
    filter.priceMin = Number(document.getElementById("price-min").value);
    filter.priceMax = Number(document.getElementById("price-max").value);

    if (filter.priceMin > filter.priceMax) [filter.priceMin, filter.priceMax] = [filter.priceMax, filter.priceMin];
    filterProduct(filter);
    
    productsList = JSON.parse(localStorage.getItem("productsList"));
    setPage(1);
}

const brandList = [
    "Innisfree", "Hadalabo", "Maybelline", "Blackrouge",
    "Perfect Diary", "Romand", "Merzy", "BBIA",
    "Laroche Poshy", "Vichy", "L'ORÉAL", "Gogotales"
];

function loadThuongHieu() {
    brandList.forEach(brand => {
        document.getElementById("thuong-hieu").innerHTML += `
            <div class="input-group mb-3">
                <input type="checkbox" id="${brand}" class="check check-th" onclick="locThuongHieu()">
                <label for="${brand}">${brand}</label>
            </div>`;
    });
}

function locThuongHieu() {
    const check = document.querySelectorAll(".check-th");
    filter.searchBrand = [];
    for (let i=0; i<brandList.length; i++)
        if (check[i].checked) filter.searchBrand.push(brandList[i]);
    filterProduct(filter);
    
    productsList = JSON.parse(localStorage.getItem("productsList"));
    setPage(1);
}