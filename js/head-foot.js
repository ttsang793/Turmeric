document.getElementsByTagName("header")[0].innerHTML += `
<div class="container">
    <div class="row align-items-start">
        <div class="col-3">
            <img src="./img/logo1.png" alt="" class="logo">
        </div>

        <div class="col-9">
            <div class="text-end align-items-center small-button">                
                <i class="bi bi-facebook icon align-middle"></i>
                <i class="bi bi-instagram icon align-middle"></i>
                <i class="bi bi-pinterest icon align-middle"></i>
                <i class="bi bi-tiktok icon align-middle"></i>
                <i class="bi bi-envelope icon align-middle"></i>
                <div class="userDetail">
                    <button class="btn dropbtn" id="form_open" onmouseenter="enter('userDrop')" onmouseleave="leave('userDrop')">
                        <i class="bi bi-person-fill"></i>
                        <div id="user-login"></div>
                    </button>
                </div>
            </div>

            <div class="row py-4">
                <div class="col-11 input-group">
                    <input type="search" placeholder="Tìm kiếm" class="search" id="search">
                    <div class="input-group-append">
                        <button class="btn btn-warning" onclick="search()">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </div>
                
                <div class="col-1">
                    <a href="./cart.html" style="color: black">
                        <i class="bi bi-cart" style="font-size: 32px"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
`

document.getElementById("nav-bar").innerHTML = `
    <div class="col-3"></div>
    <div class="col-6 main-nav">
        <a href="./index.html">TRANG CHỦ</a>
        <a href="./san-pham.html">SẢN PHẨM</a>
        <a href="./gioi-thieu.html">GIỚI THIỆU</a>
        <a href="./blog.html">BLOG</a>
    </div>
    <div class="col-3"></div>
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
            <h2>KẾT NỐI</h2>
            <ul>
                <li>
                    <a href=""><i class="bi bi-facebook"></i> turmeric_cosmestic</a>
                </li>
                <li>
                    <a href=""><i class="bi bi-instagram"></i> _Turmeric.2022_</a>
                </li>
                <li>
                    <a href=""><i class="bi bi-pinterest"></i> _Turmeric.2022_</a>
                </li>
                <li>
                    <a href=""><i class="bi bi-tiktok"></i> _Turmeric.2022_</a>
                </li>
            </ul>
        </div>

        <div class="col-4">
            <h2>LIÊN HỆ</h2>
            <ul>
                <li class="highlight"><i class="bi bi-door-open"></i> OPEN: Thứ 2 ~ Thứ 6 (trừ ngày lễ)</li>
                <li class="highlight"><i class="bi bi-phone"></i> 0348 923 412</li>
                <li>
                    <a href=""><i class="bi bi-envelope"></i> Turmeric@gmail.com</a>
                </li>
            </ul>
        </div>
    </div>
    <hr class="my-1">
    <div class="row">
        <span class="text-center">&copy 2023 | Copyright by Turmeric</span>
    </div>
</div>

<button class="btn btn-danger back-up" onclick="window.scroll(0,0)"><i class="bi bi-arrow-up"></i></button>
`

document.getElementById("loginModal").innerHTML = `
    <section class="blur-bg-overplay">
        <div class="form_container">
            <i class="fa fa-times form_close"></i>
            <!-- Login Form -->
            <div class="form login_form">
                <div class="form-inner">
                    <h2>Đăng nhập</h2>
                    <div class="input_box">
                        <input type="text" id="userNameLG" placeholder="Tên đăng nhập" name="Tên đăng nhập">
                        <i class="fa-regular fa-user user"></i>
                        <div id="error_userNameLG" class="error-message"></div>
                    </div>
                    <div class="input_box">
                        <input type="password" id="passwordLG" name="Mật khẩu" minlength="6" maxlength="32"
                            placeholder="Nhập mật khẩu">
                        <i class="fa fa-lock password"></i>
                        <i class="fa-regular fa-eye-slash pw_hide"></i>
                        <div id="error_passwordLG" class="error-message"></div>
                    </div>

                    <div class="option_field">
                        <span class="checkbox">
                            <input type="checkbox" class="check">
                            <label for="check">Remember me</label>
                        </span>
                        <a href="#" class="forgot_pw">Forgot password?</a>
                    </div>

                    <button class="buttonSubmit buttonLogin" type="submit" onclick="doSubmit(1)">Đăng nhập</button>

                    <div class="login_signup">
                        Bạn chưa có tài khoản? <a href="#" id="signup">Đăng ký</a>
                    </div>
                </div>
            </div>

            <!-- Signup Form -->
            <div class="form signup_form">
                <div class="form-inner">
                    <h2>Đăng ký</h2>
                    <div class="input_box">
                        <input type="text" id="userNameSU" name="Tên đăng nhập" placeholder="Tên đăng nhập">
                        <i class="fa-regular fa-user user"></i>
                        <i class="fa-regular fa-user user"></i>
                        <div id="error_userNameSU" class="error-message"></div>
                    </div>
                    <div class="input_box">
                        <input type="email" id="emailSU" name="Email" placeholder="Nhập email">
                        <i class="fa-regular fa-envelope email"></i>
                        <div id="error_emailSU" class="error-message"></div>
                    </div>
                    <div class="input_box">
                        <input type="password" id="passwordSU" name="Mật khẩu" placeholder="Mật khẩu" minlength="6" maxlength="32">
                        <i class="fa fa-lock password"></i>
                        <i class="fa-regular fa-eye-slash pw_hide"></i>
                        <div id="error_passwordSU" class="error-message"></div>
                    </div>
                    <div class="input_box">
                        <input type="password" id="confirmPasswordSU" placeholder="Xác nhận mật khẩu"
                            name="Xác nhận mật khẩu">
                        <i class="fa fa-lock password"></i>
                        <i class="fa-regular fa-eye-slash pw_hide"></i>
                        <div id="error_confirmPasswordSU" class="error-message"></div>
                    </div>

                    <div class="option_field">
                        <span class="checkbox">
                            <input type="checkbox" class="check">
                            <label for="check">
                                I agree the
                                <a href="#">Term & Conditions</a>
                            </label>
                        </span>
                    </div>

                    <button class="buttonSubmit buttonSignup" onclick="doSubmit(2)">Đăng ký</button>

                    <div class="login_signup">
                        Bạn có tài khoản? <a href="#" id="login">Đăng nhập</a>
                    </div>
                </div>
            </div>

            <!-- Forgot password form -->
            <div class="form forgot_form">
                <div class="form-inner">
                    <h2>Quên mật khẩu</h2>
                    <div class="input_box">
                        <input type="text" id="userNameFG" name="Tên đăng nhập" placeholder="Tên đăng nhập">
                        <i class="fa-regular fa-user user"></i>
                        <span id="error_userNameFG" class="helper-text text-danger"></span>
                        <span id="error_userNameFG_all_leter" class="helper-text text-danger"></span>
                    </div>
                    <div class="input_box">
                        <input type="email" id="emailFG" name="email" placeholder="Nhập email">
                        <i class="fa-regular fa-envelope email"></i>
                        <span id="error_emailFG" class="helper-text text-danger"></span>
                    </div>
                    <div class="input_box">
                        <input type="password" id="passwordFG" placeholder="Mật khẩu mới" name="Mật khẩu" minlength="6" maxlength="32">
                        <i class="fa fa-lock password"></i>
                        <i class="fa-regular fa-eye-slash pw_hide"></i>
                        <span id="error_passwordFG" class="helper-text text-danger"></span>
                    </div>
                    <div class="input_box">
                        <input type="password" id="confirmPasswordFG" name="Xác nhận mật khẩu"
                            placeholder="Xác nhận mật khẩu" minlength="6" maxlength="32">
                        <i class="fa fa-lock password"></i>
                        <i class="fa-regular fa-eye-slash pw_hide"></i>
                        <span id="error_confirmPasswordFG" class="helper-text text-danger"></span>
                    </div>

                    <div class="forgot_login_signup">
                        <a href="#" id="signupPW">Tạo tài khoản mới</a>
                        <a href="#" id="loginPW">Quay lại đăng nhập</a>
                    </div>

                    <button class="buttonSubmit buttonForgot" type="submit" onclick="doSubmit(3)">Thay đổi mật khẩu</button>

                </div>
            </div>
        </div>
        <div class="overlay-notify"></div>
    </section>
`;

document.getElementById("search").addEventListener("keyup", event => {
    if (event.key === "Enter") search();
})

function getGia(gia) {
    return Number(gia).toLocaleString("vi-VN") + "đ"; //định dạng số 1.000.000 VN
}

if (localStorage.getItem('userLogin') === null) {
    localStorage.setItem('userLogin',JSON.stringify(""));
    userLogin = "";
}
else userLogin = JSON.parse(localStorage.getItem("userLogin"));

if (userLogin === "")
    document.getElementById("user-login").innerHTML = "Đăng nhập";
else {
    document.getElementById("user-login").innerHTML = userLogin;
    document.querySelector(".userDetail").innerHTML += `    
    <div onmouseenter="enter('userDrop')" onmouseleave="leave('userDrop')" id="userDrop" class="dropdown-content">
        <a href="./order.html">Đơn hàng đã đặt</a>
        <a href="./index.html" onclick="logOut()">Đăng xuất</a>
    </div>
    `
}

function logOut() {
    localStorage.removeItem("userLogin");
}

function search() {
    const search = document.getElementById("search").value;
    window.location = (search === "") ? "./san-pham.html" : `./san-pham.html?search=${search}`;
}

function dangerMessage(message) {
    document.querySelector(".alert-danger").innerHTML = message;
    $('.alert-danger').css("display", "initial");
    setTimeout(() => $('.alert-danger').css("display", "none"), 3000);
}

function successMessage(message, second = 3000) {
    document.querySelector(".alert-success").innerHTML = message;
    $('.alert-success').css("display", "initial");
    setTimeout(() => $('.alert-success').css("display", "none"), second);
}

function enter(element) {
    if (userLogin !== "")
        document.getElementById(element).classList.toggle("show");
}

function leave(element) {
    if (userLogin !== "")
        document.getElementById(element).classList.toggle("show");
}

const formOpenBtn = document.querySelector("#form_open"),
blurOverplay = document.querySelector(".blur-bg-overplay"),
formContainer = document.querySelector(".form_container"),
formCloseBtn = document.querySelector(".form_close"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwShowHide = document.querySelectorAll(".pw_hide"),
forgotPW = document.querySelector(".forgot_pw"),
signupPW = document.querySelector("#signupPW"),
loginPW = document.querySelector("#loginPW"),
form = document.querySelector('.form-inner');

formOpenBtn.addEventListener("click", () => {
    if (userLogin === "") blurOverplay.classList.add("show-popup");
});
formCloseBtn.addEventListener("click", () => blurOverplay.classList.remove("show-popup"));

pwShowHide.forEach((icon) => {
    icon.addEventListener("click", () =>{
        let getPwInput = icon.parentElement.querySelector("input");
        if(getPwInput.type === "password"){
            getPwInput.type = "text";
            icon.classList.replace("fa-eye-slash", "fa-eye");
        } else {
            getPwInput.type = "password";
            icon.classList.replace("fa-eye", "fa-eye-slash");
        }
    })
})

signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});

forgotPW.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("pw");
});

signupPW.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
    formContainer.classList.remove("pw");
});

loginPW.addEventListener("click", (e) => {  // Corrected ID
    e.preventDefault();
    formContainer.classList.remove("pw");
}); 


const checkValidation = (value) => {
    let valid = true;
    switch (value) {
        case 1:
            valid &= kiemTraRong("userNameLG", 'error_userNameLG');
            valid &= kiemTraRong("passwordLG", 'error_passwordLG');
            valid &= kiemTraDangNhap("userNameLG", 'error_userNameLG', "passwordLG", 'error_passwordLG');
            return valid;
        case 2:
            //Kiểm tra rổng
            valid &= kiemTraRong("userNameSU", 'error_userNameSU');
            valid &= kiemTraRong("passwordSU", 'error_passwordSU');
            valid &= kiemTraRong("confirmPasswordSU", 'error_confirmPasswordSU');
            // Kiểm tra tên người dùng
            valid &= kiemTraUserName("#userNameSU", "#error_userNameSU");
            // Kiểm tra email
            valid &= kiemTraEmail('#emailSU', '#error_emailSU');
        
            // Kiểm tra password
            valid &= kiemTraPass('#passwordSU', '#error_passwordSU');
        
            valid &= kiemTraKhopPass('#passwordSU', '#confirmPasswordSU', '#error_confirmPasswordSU');
            
            return valid;
        case 3:
            valid &= kiemTraRong("userNameFG", 'error_userNameFG');
            // Kiểm tra email
            valid &= kiemTraEmail('#emailFG', '#error_emailFG');

            valid &= kiemTraTonTai("userNameFG", 'error_userNameFG', "emailFG", 'error_emailFG')
        
            // Kiểm tra password
            valid &= kiemTraPass('#passwordFG', '#error_passwordFG');
        
            valid &= kiemTraKhopPass('#passwordFG', '#confirmPasswordFG', '#error_confirmPasswordFG');

            return valid;
    }
}

const kiemTraRong = (idValue, idError) => {
    let inputText = document.getElementById(idValue);
    if (inputText.value.trim() === '') {
        document.getElementById(idError).innerHTML = inputText.name + ' không được bỏ trống !';
        document.getElementById(idError).style.display = 'block';
        document.getElementById(idError).style.fontSize = "10px";
        document.getElementById(idError).style.color = "red";
        return false;
    } else {
        document.getElementById(idError).innerHTML = '';
        document.getElementById(idError).style.display = 'none';
        return true;
    }
}

const kiemTraUserName = (selectorValue, selectorError) => {
    //Lấy giá trị người dùng nhập vào từ selector
    let inputText = document.querySelector(selectorValue);
    document.querySelector(selectorError).innerHTML = "";
    const regexKiTu = /^[a-zA-Z0-9_]*$/;
    let khongHopLe = false;

    if (inputText.value.length < 6 || inputText.value.length > 20) {
        document.querySelector(selectorError).innerHTML += inputText.name + ' từ 6 đến 20 kí tự! <br>' ;
        document.querySelector(selectorError).style.display = 'block';
        document.querySelector(selectorError).style.fontSize = "10px";
        document.querySelector(selectorError).style.color = "red";
        khongHopLe = true;
    }
    if (!regexKiTu.test(inputText.value)) {
        document.querySelector(selectorError).innerHTML += inputText.name + ' có chứa các ký tự không hợp lệ!';
        document.querySelector(selectorError).style.display = 'block';
        document.querySelector(selectorError).style.fontSize = "10px";
        document.querySelector(selectorError).style.color = "red";
        khongHopLe = true;
    }
    if (inputText.value.length >= 6 && usernameTonTai(inputText.value) !== -1) {
        document.querySelector(selectorError).innerHTML += 'User ' + inputText.value + ' đã tồn tại';
        document.querySelector(selectorError).style.display = 'block';
        document.querySelector(selectorError).style.fontSize = "10px";
        document.querySelector(selectorError).style.color = "red";
        khongHopLe = true;
    }
    if (!khongHopLe)
    {
        document.querySelector(selectorError).innerHTML = '';
        document.querySelector(selectorError).style.display = "none"
    }
    return !khongHopLe;
}

const kiemTraEmail = (selectorValue, selectorError) => {
    let inputText = document.querySelector(selectorValue);
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    if (inputText.value.trim() === '') {
        document.querySelector(selectorError).innerHTML = 'Email không được để trống!';
        document.querySelector(selectorError).style.display = 'block';
        document.querySelector(selectorError).style.fontSize = "10px";
        document.querySelector(selectorError).style.color = "red";
        return false;
    } else if (!regexEmail.test(inputText.value)) {
        document.querySelector(selectorError).innerHTML = 'Email không hợp lệ!';
        document.querySelector(selectorError).style.display = 'block';
        document.querySelector(selectorError).style.fontSize = "10px";
        document.querySelector(selectorError).style.color = "red";
        return false;
    } else {
        document.querySelector(selectorError).innerHTML = '';
        document.querySelector(selectorError).style.display = 'none';
        return true;
    }
}


const kiemTraPass = (selectorValue, selectorError) => {
    let inputText = document.querySelector(selectorValue);
    if (inputText.value.length >= inputText.minLength && inputText.value.length <= inputText.maxLength) {
        document.querySelector(selectorError).innerHTML = '';
        document.querySelector(selectorError).style.display = 'none';
        return true;
    } else {
        document.querySelector(selectorError).innerHTML = inputText.name + ' từ ' + inputText.minLength + ' đến ' + inputText.maxLength + ' ký tự!';
        document.querySelector(selectorError).style.display = 'block';
        document.querySelector(selectorError).style.fontSize = "10px";
        document.querySelector(selectorError).style.color = "red";
        return false;
    }
}

const kiemTraKhopPass = (password, confirmPassword, selectorError) => {
    let inputPW = document.querySelector(password);
    let inputCPW = document.querySelector(confirmPassword);
    if (inputCPW.value.trim() === inputPW.value.trim()) {
        document.querySelector(selectorError).innerHTML = '';
        document.querySelector(selectorError).style.display = 'none';
        return true;
    } else {
        document.querySelector(selectorError).innerHTML = "Xác nhận mật khẩu không trùng khớp"
        document.querySelector(selectorError).style.display = 'block';
        document.querySelector(selectorError).style.fontSize = "10px";
        document.querySelector(selectorError).style.color = "red";
        return false;
    }
}

const kiemTraDangNhap = (loginInput, loginError, passwordInput, passwordError) => {
    if (document.getElementById(loginInput).value === "") return false;
    if (checkKhoa(document.getElementById(loginInput).value)) {
        document.getElementById(loginError).innerHTML = "User đang bị khóa. Vui lòng thử lại sau";
        document.getElementById(loginError).style.display = 'block';
        document.getElementById(loginError).style.fontSize = "10px";
        document.getElementById(loginError).style.color = "red";
        return false;

    }
    const index = usernameTonTai(document.getElementById(loginInput).value);
    const password = document.getElementById(passwordInput).value;
    if (index === -1) {
        document.getElementById(loginError).innerHTML = "Username không tồn tại!!!";
        document.getElementById(loginError).style.display = 'block';
        document.getElementById(loginError).style.fontSize = "10px";
        document.getElementById(loginError).style.color = "red";
        return false;
    }
    if (!checkPassword(index, password)) {                
        document.getElementById(passwordError).innerHTML = "Nhập sai password!!!";
        document.getElementById(passwordError).style.display = 'block';
        document.getElementById(passwordError).style.fontSize = "10px";
        document.getElementById(passwordError).style.color = "red";
        return false;
    }
    return true;
}

const kiemTraTonTai = (loginInput, loginError, emailInput, emailError) => {
    if (document.getElementById(loginInput).value === "") return false;
    const index = usernameTonTai(document.getElementById(loginInput).value);
    const email = document.getElementById(emailInput).value;
    if (index === -1) {
        document.getElementById(loginError).innerHTML = "Username không tồn tại!!!";
        document.getElementById(loginError).style.display = 'block';
        document.getElementById(loginError).style.fontSize = "10px";
        document.getElementById(loginError).style.color = "red";
        return false;
    }
    if (!checkEmail(index, email)) {                
        document.getElementById(emailError).innerHTML = "Nhập sai email!!!";
        document.getElementById(emailError).style.display = 'block';
        document.getElementById(emailError).style.fontSize = "10px";
        document.getElementById(emailError).style.color = "red";
        return false;
    }
    return true;
}

function doSubmit(value) {
    if (!checkValidation(value)) return;
    switch (value) {
        case 1:
            localStorage.setItem('userLogin',JSON.stringify(document.getElementById("userNameLG").value));
            location.reload();
            break;
        case 2:
            dangKi({
                username: document.getElementById("userNameSU").value,
                password: document.getElementById("passwordSU").value,
                email: document.getElementById("emailSU").value,
                ngaydangky: new Date().toLocaleDateString("fr-FR"),
                status: 1
            })
            location.reload();
            break;
        case 3:
            suaMatKhau(document.getElementById("userNameFG").value, document.getElementById("passwordFG").value);
            location.reload();
            break;
    }
}