createCart();
let userCart = JSON.parse(localStorage.getItem("userCart"));

function addToCart(id, ammount = 1) {
    product = getProduct(id);
    let ten = product.name;
    let gia = product.price;
    let img = product.img;
    let hang = product.brand;
    let sl = ammount;

    let temp={hang:hang,gia:gia,ten:ten,img:img,sl:sl};
    userCart.push(temp);
    localStorage.setItem('userCart',JSON.stringify(userCart));
}

function displayCart() {
    let display = "";
    for (let i=1; i<userCart.length; i++) {
        let item = userCart[i];
        display += `<img src="${item.img}" style="width: 100px; display: inline;"><p>${item.ten}, ${item.gia}, ${item.hang}, ${item.sl}</p>`;
    }
    document.querySelector('.list').innerHTML = (userCart.length === 1) ? "" : display;
}