initOrder();
let orderList = JSON.parse(localStorage.getItem('orderList'));
let userOrder;

function addOrder(order) {
    order.forEach(element => orderList.push(element));
    localStorage.setItem('orderList',JSON.stringify(orderList));
}

function selectOrder() {
    userOrder = [];
    for (let i=0; i<orderList.length; i++)
        if (orderList[i].username === userLogin)
            userOrder.push(orderList[i]);
}

function emptyOrder() {
    if (userLogin === "") {
        document.getElementById("order-empty-message").innerHTML = "Bạn cần phải đăng nhập để xem lịch sử đơn hàng!!!";
        return true;
    }
    selectOrder()
    if (userOrder.length === 0) {
        document.getElementById("order-empty-message").innerHTML = `Bạn cần chưa đặt một đơn hàng nào!!!`;
        return true;
    }
    return false;
}

function displayOrder() {
    if (emptyOrder()) {        
        $('#order-list').css("display", "none");
        return;
    }
    $('#order-empty').css("display", "none");    
    let display = "";
    for (let i=0; i<userOrder.length; i++) {
        let item = userOrder[i];
        display += `        
            <tr style="padding: 0px">
                <td>
                    <img src="${item.img}" alt="" width="80%">
                </td>
                <td>${item.name}<br>Số lượng: ${item.amount}</td>
                <td>${item.orderDate}</td>
                <td>${getGia(item.total)}</td>
                <td>Chờ vận chuyển</td>
                <td>
                    <button class="btn btn-danger" onclick="">Hủy</button>
                </td>
            </tr>        
        `;
    }
    document.getElementById("order-body").innerHTML += display;
}