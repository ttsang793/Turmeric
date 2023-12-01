const page = {current: 1, numOfProducts: 9};
const content = document.querySelector(".danh-sach");
let productsList;

window.onload = () => {
    const urlParam = new URLSearchParams(location.search);
    const searchString = urlParam.get('search');

    if (searchString === undefined || searchString === null) initProduct();
    else searchProduct(searchString);

    productsList = JSON.parse(localStorage.getItem("productsList"));
    setPage();
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
        return;
    }

    let start = page.numOfProducts * (page.current - 1);
    let end = Math.min(page.numOfProducts * page.current, productsList.length);
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
    if (index===0) {
        for (let i=productsList.length - 1; i>0; i--)
            for (let j=0; j<i; j++)
                if (productsList[j].id > productsList[j+1].id)
                [productsList[j], productsList[j+1]] = [productsList[j+1], productsList[j]];
    }
    else if (index==1 || index==2) {
        for (let i=productsList.length - 1; i>0; i--)
            for (let j=0; j<i; j++) {
                price1 = Number(productsList[j].price);
                price2 = Number(productsList[j+1].price);
                if((index === 1 && price1 > price2) || (index===2 && price1 < price2))
                    [productsList[j], productsList[j+1]] = [productsList[j+1], productsList[j]];
            }
    }
    else {        
        for (let i=productsList.length - 1; i>0; i--)
            for (let j=0; j<i; j++) {
                letter1 = productsList[j].name.toLowerCase();
                letter2 = productsList[j+1].name.toLowerCase();
                if((index===3 && letter1 > letter2) || (index===4 && letter1 < letter2))
                    [productsList[j], productsList[j+1]] = [productsList[j+1], productsList[j]];
            }
    }

    setPage();
}