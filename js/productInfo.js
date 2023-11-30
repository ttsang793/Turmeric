function showInfo(id) {
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

function closeInfo() {
    $('.product-view').css("display", "none");
    $('body').css("overflow", "initial");

    productView.innerHTML = '';
}