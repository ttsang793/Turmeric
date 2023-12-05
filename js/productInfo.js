const productView = document.getElementById("productModal");

function showInfo(id) {
    product = getProduct(id);
    
    productView.innerHTML = `
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="p-2 text-end">
                    <button class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div class="container">
                    <div class="row p-5">
                        <div class="col-5">
                            <div id="productCarousel" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                </div>
                            </div>
                        </div>
                        <div class="col-7">
                            <fieldset class="tieu-de mb-5">
                                <h2 class="mb-4">${product.name}</h2>
                                <h3 style="color: palevioletred">${getGia(product.price)}</h3>
                                <div class="input-group mb-3 pt-3">
                                    <button class="btn amount text-center" onclick="changeNumber('-')">-</button>
                                    <input id="amount-info" type="number" name="" id="" value="1" min="1" max="" class="ammount text-center" onkeyup="checkKey(this, event);">
                                    <button class="btn amount text-center" onclick="changeNumber('+')">+</button>
                                    <div class="btn btn-warning" onclick="addToCart(${product.id})">Thêm vào giỏ hàng</div>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    //Code dưới đây chỉ mang tính chất kiểm thử
    const photo = (id%2==0) ? [product.img] : [product.img, "./img/SP/0001.jpg", "./img/SP/0003.jpg"];
    let slide = '';
    for (let i=0; i < photo.length; i++) {
        if (i === 0)
            slide += `        
                <div class="carousel-item active">
                    <img src="${photo[i]}" class="d-block w-100" alt="...">
                </div>
            `;
        else
            slide += `        
                <div class="carousel-item">
                    <img src="${photo[i]}" class="d-block w-100" alt="...">
                </div>
            `;
    }
    console.log(photo);
    document.querySelector(".carousel-inner").innerHTML = slide;
    if (photo.length > 1) document.getElementById("productCarousel").innerHTML += `
        <button class="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true" style="color: blue"></span>
            <span class="visually-hidden">Next</span>
        </button>
    `
    
    new bootstrap.Modal(productView).show();
}

function changeNumber(input) {
    ammount = document.getElementById("amount-info");
    if (input === "+") ammount.value++;
    else if (ammount.value > 1) ammount.value--;
}

function addToCart(product, index = undefined) {
    if (userLogin === "") {
        $('.alert-danger').css("display", "initial");
        setTimeout(() => $('.alert-danger').css("display", "none"),3000);
        return;
    }
    if (index === undefined)
        amount = document.getElementById("amount-info");
    else
        amount = document.getElementsByClassName("amount-page")[index];

    if(findProduct(product) === -1) {
        insertCart(product, amount.value);
        document.querySelector(".alert-success").innerHTML = "Thêm thành công sản phẩm";
    }

    else {
        updateCart(product, amount.value);
        document.querySelector(".alert-success").innerHTML = "Update thành công sản phẩm";
    };
    $('.alert-success').css("display", "initial");
    setTimeout(() => $('.alert').css("display", "none"),3000);
}