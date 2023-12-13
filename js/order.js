initOrder();
let orderList = JSON.parse(localStorage.getItem('orderList'));
let userOrder;

function addOrder(order, orderDate) {
    orderList.push({date: orderDate, username: userLogin, order: order});
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
        let order = userOrder[i];
        for (let j=0; j<order.order.length; j++)
            if (j===0)
                display += `        
                    <tr style="padding: 0px">
                        <td>
                            <img src="${order.order[j].img}" alt="" width="80%">
                        </td>
                        <td>${order.order[j].name}<br>Số lượng: ${order.order[j].amount}</td>
                        <td>${getGia(order.order[j].total)}</td>
                        <td rowspan="${order.order.length}">${order.date}</td>
                        <td rowspan="${order.order.length}">Chờ vận chuyển</td>
                        <td rowspan="${order.order.length}">
                            <button class="btn btn-danger" onclick="checkHuy(${i})">Hủy</button>
                        </td>
                    </tr>      
                `;
            else
                display += `        
                    <tr style="padding: 0px">
                        <td>
                            <img src="${order.order[j].img}" alt="" width="80%">
                        </td>
                        <td>${order.order[j].name}<br>Số lượng: ${order.order[j].amount}</td>
                        <td>${getGia(order.order[j].total)}</td>
                    </tr>        
                `;
    }
    document.getElementById("order-body").innerHTML += display;
}

function checkHuy(index) {
    document.getElementById("cancelModal").innerHTML = `    
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="cancelModalLabel">Xác nhận</h5>
                </div>
                <div class="modal-body">
                    Bạn có muốn hủy hàng?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal" onclick="huyDonHang(${index})">Có</button>
                    <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Không</button>
                </div>
            </div>
        </div>
    `;
    new bootstrap.Modal(document.getElementById("cancelModal")).show();
}

function huyDonHang(index) {
    orderList.splice(orderList.findIndex(order => order === userOrder[index]),1);
    $('.alert-danger').css("display", "initial");
    localStorage.setItem('orderList',JSON.stringify(orderList));
    setTimeout(() => $('.alert-danger').css("display", "none"), 3000);
    setTimeout(() => location.reload(), 3000);
}