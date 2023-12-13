document.querySelector('.left').innerHTML = `
  <div class="nav-list">
    <div class="img text-center pb-3">
        <img src="./img/logo1.png" alt="" width="80%">
    </div>
    <a href="./products.html" class="btn btn-left py-3 ps-2 products"><i class="bi bi-box-fill"></i> SẢN PHẨM</a>
    <a href="./orders.html" class="btn btn-left py-3 ps-2 orders"><i class="bi bi-cart-check-fill"></i> ĐƠN HÀNG</a>
    <a href="./accounts.html" class="btn btn-left py-3 ps-2 accounts"><i class="bi bi-file-earmark-person-fill"></i> TÀI KHOẢN</a>
    <a href="./statistics.html" class="btn btn-left py-3 ps-2 statistics"><i class="bi bi-pie-chart-fill"></i> THỐNG KÊ</a>
    <a href="./admin.html" class="btn btn-left py-3 ps-2 dang-xuat"><i class="bi bi-door-open-fill"></i> ĐĂNG XUẤT</a>
  </div>
`;

let file = window.location.pathname.split("/").pop();
file = file.slice(0,file.indexOf('.'));
document.querySelector(`.${file}`).setAttribute("style", "background-color: var(--bs-danger-bg-subtle); color: #212529; font-weight: bold; width: 100%")

const buttons = document.querySelectorAll('.btn-left')
buttons.forEach(button => {
  button.addEventListener("mouseover", () => {
    document.querySelector(`.${file}`).setAttribute("style", "background-color: #212529; font-weight: normal; color: white; width: 80%")
    button.setAttribute("style", "background-color: var(--bs-danger-bg-subtle); color: #212529; font-weight: bold; width: 100%")
  });

  button.addEventListener("mouseleave", () => {
    if (!button.classList.contains(file))
      button.setAttribute("style", "background-color: #212529; font-weight: normal; color: white; width: 80%")
    document.querySelector(`.${file}`).setAttribute("style", "background-color: var(--bs-danger-bg-subtle); color: #212529; font-weight: bold; width: 100%")
  })
})