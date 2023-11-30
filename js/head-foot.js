document.getElementsByTagName("header")[0].innerHTML += `
<div class="container">
    <div class="text-end align-items-center">                
        <i class="bi bi-facebook icon align-middle"></i>
        <i class="bi bi-instagram icon align-middle"></i>
        <i class="bi bi-pinterest icon align-middle"></i>
        <i class="bi bi-envelope icon align-middle"></i>
        <button class="btn">
            <i class="bi bi-person-fill"></i>
            Đăng nhập
        </button>
    </div>

    <div class="row align-items-center">
        <div class="col-3">
            <img src="./img/logo1.png" alt="" class="logo">
        </div>

        <div class="col-8">
            <div class="input-group">
                <input type="text" placeholder="Tìm kiếm" class="search">
                <div class="input-group-append">
                    <button class="btn btn-warning">
                        <i class="bi bi-search"></i>
                    </button>
                </div>
            </div>
        </div>

        <div class="col-1">
            <i class="bi bi-cart" style="font-size: 32px"></i>
        </div>
    </div>        
</div>

<div class="row text-center nav">
    <div class="col-3"></div>
    <div class="col-6 btn-group">
        <a href="./index.html" class="btn btn-dark">
            TRANG CHỦ
        </a>
        <a href="./san-pham.html" class="btn btn-dark">
            SẢN PHẨM
        </a>
        <a href="./gioi-thieu.html" class="btn btn-dark">
            GIỚI THIỆU
        </a>
        <a href="./blog.html" class="btn btn-dark">
            BLOG
        </a>
    </div>
    <div class="col-3"></div>
</div>
`

document.getElementsByTagName("footer")[0].innerHTML = `
<div class="container pb-2">
    <div class="row">
        <div class="col-4">
            <h2>HỖ TRỢ</h2>
            <ul>
                <li>
                    <a href="#">Chính sách vận chuyển</a>
                </li>
                <li>
                    <a href="#">Hình thức thanh toán</a>
                </li>
                <li>
                    <a href="#">Chính sách đổi trả</a>
                </li>
                <li>
                    <a href="#">Report</a>
                </li>
            </ul>
        </div>

        <div class="col-4">
            <h2>LIÊN HỆ</h2>
            <ul>
                <li>
                    <a href=""><i class="bi bi-facebook"></i> turmeric_cosmestic</a>
                </li>
                <li>
                    <a href=""><i class="bi bi-instagram"></i> _Turmeric.2022_</a>
                </li>
                <li>
                    <a href=""><i class="bi bi-envelope"></i> Turmeric@gmail.com</a>
                </li>
                <li>
                    <a href=""><i class="bi bi-telephone"></i> HOTLINE: 028 3827 9777</a>
                </li>
                </li>
            </ul>
        </div>

        <div class="col-4">
            <h2>DỊCH VỤ</h2>
            <ul>
                <li class="highlight"><i class="bi bi-door-open"></i> OPEN: Thứ 2 ~ Thứ 6 (trừ ngày lễ)</li>
                <li class="highlight"><i class="bi bi-phone"></i> 0348923412</li>
            </ul>
        </div>
    </div>
    <hr class="my-1">
    <div class="row">
        <span class="text-center">&copy 2023 | Copyright by Turmeric</span>
    </div>
</div>
`