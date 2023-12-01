initOrder();
let orderList = JSON.parse(localStorage.getItem('orderList'));

function addOrder(order) {
    order.forEach(element => orderList.push(element));
    localStorage.setItem('orderList',JSON.stringify(orderList));
}

function displayOrder() {
    document.getElementById("order-list").innerHTML = `
        <h2>
            Đơn đã đặt
        </h2>
        <table class="text-center table table-bordered" style="vertical-align: middle;">
            <thead style="font-size: 20px; vertical-align: middle">
                <tr>
                    <th width="15%">Hình ảnh</th>
                    <th width="45%">Tên sản phẩm</th>
                    <th width="8%">Số lượng</th>
                    <th width="13%">Giá</th>
                    <th width="13%">Trạng thái</th>
                    <th width="6%"></th>
                </tr>
            </thead>
            <tbody id="order-body">
            </tbody>
        </table>
    `;
    
    let display = "";
    for (let i=0; i<orderList.length; i++) {
        let item = orderList[i];
        display += `        
            <tr style="padding: 0px">
                <td>
                    <img src="${item.img}" alt="" width="80%">
                </td>
                <td>${item.name}</td>
                <td>${item.amount}</td>
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