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
        if (orderList[i].username === username)
            userOrder.push(orderList[i]);
}

function emptyOrder() {
    selectOrder()
    if (orderList.length === 0) {
        document.getElementById("order-list").innerHTML = `
            <h2>
                Bạn chưa đặt đơn hàng nào!!!
            </h2>
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-4150967-3437888.png" style="width: 50%">
        `;
        return true;
    }
    document.getElementById("order-list").innerHTML = `
        <h2>
            Đơn đã đặt
        </h2>
        <table class="text-center table table-bordered" style="vertical-align: middle;">
            <thead style="font-size: 20px; vertical-align: middle">
                <tr class="table-danger">
                    <th width="15%">Hình ảnh</th>
                    <th width="42%">Tên sản phẩm</th>
                    <th width="13%">Thời gian đặt</th>
                    <th width="11%">Giá</th>
                    <th width="13%">Trạng thái</th>
                    <th width="6%"></th>
                </tr>
            </thead>
            <tbody id="order-body">
            </tbody>
        </table>
    `;
    return false;
}

function displayOrder() {
    if (emptyOrder()) return;    
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