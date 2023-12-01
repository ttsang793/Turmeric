function emptyCart() {
    selectCart()
    if (userCart.length === 0) {
        document.getElementById("cart-list").innerHTML = `
            <h2>
                Bạn cần phải thêm <a href="./san-pham.html" style="text-decoration:none;">sản phẩm</a> vào giỏ hàng!!!
            </h2>
            <img src="https://www.aachifoods.com/templates/default-new/images/empty-cart.png" style="width: 25%">
        `;
        return true;
    }
    document.getElementById("cart-list").innerHTML = `
        <h2>
            Giỏ hàng
        </h2>
        <table class="text-center table table-bordered" style="vertical-align: middle;">
            <thead style="font-size: 20px; vertical-align: middle">
                <tr class="table-danger">
                    <th width="3%">
                        <input type="checkbox" id="check-all" class="check" onclick="checkAll()">
                    </th>
                    <th width="20%">Hình ảnh</th>
                    <th width="45%">Tên sản phẩm</th>
                    <th width="10%">Số lượng</th>
                    <th width="15%">Giá</th>
                    <th width="7%"></th>
                </tr>
            </thead>
            <tbody id="cart-body">
            </tbody>
        </table>
    `;
    return false;
}

function displayCart() {
    if (emptyCart()) return;
    let display = "";
    for (let i=0; i<userCart.length; i++) {
        let item = userCart[i];
        display += `        
            <tr style="padding: 0px">
                <td>
                    <input type="checkbox" class="check" onclick="autoCheckAll()">
                </td>
                <td>
                    <img src="${item.img}" alt="" width="80%">
                </td>
                <td>${item.name}</td>
                <td>${item.amount}</td>
                <td>${getGia(item.total)}</td>
                <td>
                    <button class="btn btn-danger" onclick="deleteCart(${i})">Xóa</button>
                </td>
            </tr>        
        `;
    }
    document.getElementById("cart-body").innerHTML += display;
    document.getElementById("cart-body").innerHTML += `
        <tr style="padding: 0px;font-size: 20px;">
            <th colspan="4" class="text-end">TỔNG:</th>
            <th colspan="2">${getGia(getTotal())}</th>
        </tr>
    `;
    document.getElementById("cart-list").innerHTML += `
        <button class="btn btn-success" onclick="makeOrder()">Đặt hàng</button>
        <button class="btn btn-danger" onclick="deleteAllCart()">Xóa giỏ hàng</button>
    `
}

function checkAll() {
    const status = document.getElementById("check-all").checked;
    document.querySelectorAll(".check").forEach(check => check.checked = status);
}

function autoCheckAll() {
    const check = document.querySelectorAll(".check");
    for (let i=1; i<check.length; i++)
        if (!check[i].checked) {
            document.getElementById("check-all").checked = false;
            return;
        }
    document.getElementById("check-all").checked = true;
}

function makeOrder() {
    let order = [];
    const check = document.querySelectorAll(".check");
    let warning = true;
    const length = userCart.length;
    for (let i=0; i < length; ++i) {
        if (check[i+1].checked) {
            userCart[i].orderDate = new Date().toLocaleString("vi-VN");
            order.push(userCart[i]);
            let index = cartList.findIndex(cart => cart === userCart[i]);
            console.log(index);
            if (index !== -1) {
                cartList.splice(index,1);
            }
            warning = false;
        }
    }
    if (warning) {        
        $('.alert-danger').css("display", "initial");
        setTimeout(() => $('.alert-danger').css("display", "none"), 3000);
    }
    else {        
        $('.alert-success').css("display", "initial");
        setTimeout(() => $('.alert-success').css("display", "none"), 3000);
        setTimeout(() => location.reload(), 3000);
        localStorage.setItem('cartList',JSON.stringify(cartList));
        addOrder(order);
    }
}