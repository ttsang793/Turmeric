let orderData = [];

  onload = () => {
    if (localStorage.getItem('orderDatabase') === null)
        localStorage.setItem('orderDatabase',JSON.stringify(orderData));
    else
        orderData = JSON.parse(localStorage.getItem("orderDatabase"));
    loadBang()
}

function loadBang(searchValue = '') {
  let display = '';
  for (let i=0; i<orderData.length; i++) {
    if(orderData[i].username.toLowerCase().includes(searchValue.toLowerCase()) || searchValue ===''){
      let order = orderData[i];
      for (let j=0; j<order.order.length; j++)
          if (j===0)
              display += `        
                  <tr style="padding: 0px">
                      <td rowspan="${order.order.length}">${order.username}</td>
                      <td>
                          <img src="${"../" + order.order[j].img}" alt="" width="100px">
                      </td>
                      <td>${order.order[j].name}<br>Số lượng: ${order.order[j].amount}</td>
                      <td rowspan="${order.order.length}">${order.total}</td>
                      <td rowspan="${order.order.length}">${order.date}</td>
                      <td rowspan="${order.order.length}">${order.status}</td>
                      <td rowspan="${order.order.length}">
                          <button class="btn btn-success" onclick="xacNhan(${i})">Xác nhận</button>
                      </td>
                  </tr>      
              `;
          else
              display += `        
                  <tr style="padding: 0px">
                      <td>
                          <img src="${"../" + order.order[j].img}" alt="" width="100px">
                      </td>
                      <td>${order.order[j].name}<br>Số lượng: ${order.order[j].amount}</td>
                  </tr>        
              `;
    }
    
  }
  document.getElementById('order-ready').innerHTML = display;
} 

function searchOrderByUsername() {
  loadBang(document.getElementById("search").value);
}

document.getElementById("search").addEventListener("keyup", event => {
  if (event.key === "Enter") searchOrderByUsername();
})

function xacNhan(index){
  orderData[index].status = "Đã xác nhận đơn hàng!!<br>Chờ vận chuyển.";
  localStorage.setItem('orderDatabase',JSON.stringify(orderData));
  loadBang();
}

function getOrderList(username) {
  if (localStorage.getItem('orderDatabase') === null)
      localStorage.setItem('orderDatabase',JSON.stringify(orderData));
  orderList = JSON.parse(localStorage.getItem('orderDatabase'));
  let returnList = new Array();
  for (let i=0; i<orderList.length; i++)
      if (orderList[i].username === username) returnList.push(orderList[i]);
  return returnList;
}

function themDonHang(date, username, order, total){
  orderData = JSON.parse(localStorage.getItem("orderDatabase"));
  for(var i = 0; i < order.length; i++) {
      updateSoLuong(order[i].id, order[i].amount*(-1));
  }
  orderData.push( {date: date, username: username, order:order, total:total, status: "Chờ xác nhận"} );
  localStorage.setItem('orderDatabase',JSON.stringify(orderData));
}

function SearchOrder(date, username){
  orderData = JSON.parse(localStorage.getItem("orderDatabase"));
  for(var i=0; i<orderData.length; i++){
    if(orderData[i].date == date && orderData[i].username == username)
      return i;
  }
  return -1;  
}

function deleteOrder(date, username) {
  // orderList.splice(orderList.findIndex(order => order === userOrder[index]),1);
  const index = SearchOrder(date, username);
  for(var i = 0; i < orderData[index].order.length; i++) {
      updateSoLuong(orderData[index].order[i].id, orderData[index].order[i].amount);
  }
  orderData.splice(index,1);
  localStorage.setItem('orderDatabase',JSON.stringify(orderData));
}