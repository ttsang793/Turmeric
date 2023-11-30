let productsList, current;
let content = document.querySelector(".danh-sach");
let productView = document.querySelector(".product-view");
let pageProducts;

function sort(way) {
    if (way===0)
        for (let i=0; i<productsList.length - 1; i++)
            for (let j=i+1; j<productsList.length; j++) {
                if (productsList[i].id > productsList[j].id)                
                    [productsList[i], productsList[j]] = [productsList[j], productsList[i]];
        }       
    else if (way<3) {
        for (let i=0; i<productsList.length - 1; i++)
            for (let j=i+1; j<productsList.length; j++) {
                price1 = Number(productsList[i].price);
                price2 = Number(productsList[j].price);
                if((way===1 && price1>price2) || (way===2 && price1<price2))
                    [productsList[i], productsList[j]] = [productsList[j], productsList[i]];
            }
    }
    else {
        for (let i=0; i<productsList.length - 1; i++)
            for (let j=i+1; j<productsList.length; j++) {
                letter1 = productsList[i].name.toLowerCase();
                letter2 = productsList[j].name.toLowerCase();
                if((way===3 && letter1>letter2) || (way===4 && letter1<letter2))
                    [productsList[i], productsList[j]] = [productsList[j], productsList[i]];
            }
    }
    getPage(current);
}

function getGia(gia) {
    return Number(gia).toLocaleString("de-DE"); //định dạng số 1.000.000 VN
}

function empty() {
    if (productsList === null || productsList.length === 0) {
        content.style.display = "initial";
        content.innerHTML = `
            <div class="text-center" style="margin: 100px 0">
                <h1 class="text-center">Không có sản phẩm. Vui lòng thử lại</h1>
                <img src="https://media.tenor.com/v_W_gDtULNwAAAAi/confused-face.gif" alt="">
            </div>
        `
        return true;
    }
    return false
}

function getProduct(id) {
    for (let i=0; i<productsList.length; i++)
        if (productsList[i].id === `${id}`) return productsList[i];
    return null;
}

function getPage(currentPage) {
    let start = pageProducts * (currentPage - 1);
    let end = (pageProducts * currentPage > productsList.length) ? productsList.length : pageProducts * currentPage;
    let page = "";

    if (empty()) return;
    for (let i=start; i<end; i++) {
        page += `
            <div id="chi-tiet" class="chi-tiet" onclick="show(${productsList[i].id})">
                <div class="hinh-san-pham">
                    <img src="${productsList[i].img}" alt="">
                </div>
                <div class="ten-san-pham pt-3">
                    ${productsList[i].name}
                </div>
                <div class="gia">${getGia(productsList[i].price)}đ</div>

                <div class="input-group mb-3 justify-content-center pt-3">
                    <input type="number" name="" id="" value="1" min="1" max="" class="ammount text-center">
                    <button class="btn btn-warning">
                        <i class="bi bi-cart"></i>
                    </button>
                </div>
            </div>
        `;
        content.innerHTML = page;
    }
    current = currentPage;
}

function closeView() {
    $('.product-view').css("display", "none");
    $('body').css("overflow", "initial");

    productView.innerHTML = '';
}

function show(id) {
    product = getProduct(id);
    $('.product-view').css("display", "block");
    $('body').css("overflow", "hidden");


    productView.innerHTML = `       
        <div class="container">
            <button class="btn close" onclick="closeView()">x</button>
            <div class="row p-5">
                <div class="col-5">
                    <img src="${product.img}" alt="" style="width:70%">
                </div>
                <div class="col-7">
                    <fieldset class="tieu-de mb-5">
                        <h2 class="mb-4">${product.name}</h2>
                        <h3 style="color: palevioletred">${getGia(product.price)}đ</h3>
                        <div class="input-group mb-3 pt-3">
                            <button class="btn ammount text-center" onclick="changeNumber("-")">-</button>
                            <input type="number" name="" id="" value="1" min="1" max="" class="ammount text-center" id="ammount">
                            <button class="btn ammount text-center" onclick="changeNumber("+")">+</button>
                            <div class="btn btn-warning">Thêm vào giỏ hàng</div>
                        </div>
                    </fieldset>

                    <fieldset class="mb-3">
                        <legend>Mô tả</legend>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Sunt veniam perspiciatis id, numquam, aspernatur aliquam reiciendis pariatur unde
                            asperiores laboriosam facere, ipsum dolorem odit sit? Ad vitae dicta laboriosam odio.
                        </p>
                    </fieldset>

                    <fieldset class="mb-3">
                        <legend>Cách sử dụng</legend>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Sunt veniam perspiciatis id, numquam, aspernatur aliquam reiciendis pariatur unde
                            asperiores laboriosam facere, ipsum dolorem odit sit? Ad vitae dicta laboriosam odio.
                        </p>
                    </fieldset>
                </div>
            </div>
        </div>
    `
}

function renderPage(number = 1) {
    document.querySelectorAll("#page .btn").forEach(button => {
        if (button.value !== `${number}`) {
            button.style.backgroundColor = "white";
            button.style.color = "var(--bs-danger)";
        }
        else {
            button.style.backgroundColor = "var(--bs-danger)";
            button.style.color = "white";
        }
    });
    getPage(number);
    current = Number(number);
}

function reset(numOfProduct = 9) {
    renderPageNumber(numOfProduct);
    renderPage();
}

function renderPageNumber(numOfProduct) {
    page = '';
    for (let i=1; i<=Math.ceil(productsList.length / numOfProduct); i++) {
        page += `
            <button class="btn btn-outline-danger" value="${i}" onclick="renderPage(this.value)">${i}</button>
        `;
        document.getElementById("page").innerHTML = page;
    }
    pageProducts = numOfProduct;
}

window.onload = () => {
    createProduct();
    productsList = []//JSON.parse(localStorage.getItem("productsList"));
    empty();
    reset();
}