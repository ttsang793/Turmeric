function emptyCart() {
    if (userLogin === "") {
        document.getElementById("cart-empty-message").innerHTML = "Bạn cần phải đăng nhập để mua sắm!!!";
        return true;
    }
    selectCart()
    if (userCart.length === 0) {
        document.getElementById("cart-empty-message").innerHTML = `Bạn cần phải thêm <a href="./san-pham.html" style="text-decoration:none;">sản phẩm</a> vào giỏ hàng!!!`;
        return true;
    }
    return false;
}

function displayCart() {
    if (emptyCart()) {
        $('#cart-list').css("display", "none");
        return;
    }
    $('#cart-empty').css("display", "none");
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
            delete userCart[i].username;
            order.push(userCart[i]);
            let index = cartList.findIndex(cart => cart === userCart[i]);
            if (index !== -1) cartList.splice(index,1);
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
        addOrder(order, new Date().toLocaleString("vi-VN"));
    }
}