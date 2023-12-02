const productView = document.getElementById("productModal");

function showInfo(id) {
    product = getProduct(id);
    $('#productModal').modal("show");

    productView.innerHTML = `
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <button class="close btn" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="container">
                        <div class="row p-5">
                            <div class="col-5">
                                <img src="${product.img}" alt="" style="width:70%">
                            </div>
                            <div class="col-7">
                                <fieldset class="tieu-de mb-5">
                                    <h2 class="mb-4">${product.name}</h2>
                                    <h3 style="color: palevioletred">${getGia(product.price)}</h3>
                                    <div class="input-group mb-3 pt-3">
                                        <button class="btn amount text-center" onclick="changeNumber('-')">-</button>
                                        <input id="amount-info" type="number" name="" id="" value="1" min="1" max="" class="ammount text-center">
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
        </div>
    `;
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