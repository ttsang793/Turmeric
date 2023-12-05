let productData = [
    { id: '10001', brand: 'Innisfree', img: './img/SP/0001.jpg', name: 'Black Tea Youth Enhancing SET', price: 933000, status: 1},
    { id: '10002', brand: 'Innisfree', img: './img/SP/0002.jpg', name: 'Innisfree Green Tea Super Skincare SET', price: 1500000, status: 1},
    { id: '10003', brand: 'Innisfree', img: './img/SP/0003.jpg', name: 'Apple Seed Cleansing Oil & Apple Seed Lip & Eye Makeup Remover', price: 510000, status: 1},
    { id: '10004', brand: 'Innisfree', img: './img/SP/0004.jpg', name: 'Green Tea Hydrating Amino Acid Cleansing Oil 150mL', price: 500000, status: 1},
    { id: '10005', brand: 'Innisfree', img: './img/SP/0005.jpg', name: 'Apple Seed Lip & Eye Makeup Remover Tissue 30shts', price: 100000, status: 1},
    { id: '10006', brand: 'Innisfree', img: './img/SP/0006.jpg', name: 'Green Tea Hydrating Amino Acid Cleansing Foam 150g', price: 260000, status: 1},
    { id: '10007', brand: 'Innisfree', img: './img/SP/0007.jpg', name: 'Green Tea Foam Cleanser 150mL', price: 260000, status: 1},
    { id: '10008', brand: 'Innisfree', img: './img/SP/0008.jpg', name: 'Green Tea Balancing Skin EX (Toner)', price: 345000, status: 1},
    { id: '10009', brand: 'Innisfree', img: './img/SP/0009.jpg', name: 'Green Tea Fresh Skin Innisfree (Toner)', price: 322000, status: 1},
    { id: '10010', brand: 'Innisfree', img: './img/SP/0010.jpg', name: 'Canola Honey Deep-Moisture', price: 130000, status: 1},
    { id: '10011', brand: 'Innisfree', img: './img/SP/0011.jpg', name: 'Green Tea Lip', price: 140000, status: 1},
    { id: '10012', brand: 'Innisfree', img: './img/SP/0012.jpg', name: 'Real Peppermint Mask (Mặt nạ Bạc hà Innisfree)', price: 240000, status: 1},
    { id: '10013', brand: 'Innisfree', img: './img/SP/0013.jpg', name: 'Real Rose Mask (Mặt nạ chiếc xuất Hoa hồng Innisfree)', price: 240000, status: 1},
    { id: '10014', brand: 'Innisfree', img: './img/SP/0014.jpg', name: 'Tone Up No Sebum Sunscreen EX SPF 50+ PA++++ 50mL', price: 330000, status: 1},
    { id: '10015', brand: 'Innisfree', img: './img/SP/0015.jpg', name: 'Intensive Triple-shield Sunscreen SPF50+ PA++++ 50mL', price: 360000, status: 1},
    { id: '10016', brand: 'Innisfree', img: './img/SP/0016.jpg', name: 'Son Kem Lì Innisfree Real Fit Matte Liquid', price: 190000, status: 1},
    { id: '10017', brand: 'Innisfree', img: './img/SP/0017.jpg', name: 'Son Lì Innisfree Real Fit Matte Lipstick 3.6gr', price: 230000, status: 1},
    { id: '10018', brand: 'Hadalabo', img: './img/SP/0018.jpg', name: 'Hộp mặt nạ tinh chất dưỡng ẩm cao cấp (5 miếng)', price: 195000, status: 1},
    { id: '10019', brand: 'Hadalabo', img: './img/SP/0019.jpg', name: 'Sữa rửa mặt dưỡng ẩm cao cấp', price: 125000, status: 1},
    { id: '10020', brand: 'Hadalabo', img: './img/SP/0020.jpg', name: 'Dung dịch dưỡng ẩm (Da dầu)', price: 190000, status: 1},
    { id: '10021', brand: 'Hadalabo', img: './img/SP/0021.jpg', name: 'Kem dưỡng ẩm', price: 200000, status: 1},
    { id: '10022', brand: 'Hadalabo', img: './img/SP/0022.jpg', name: 'Dung dịch dưỡng ẩm (Da thường, Da khô)', price: 190000, status: 1},
    { id: '10023', brand: 'Hadalabo', img: './img/SP/0023.jpg', name: 'Sữa dưỡng trắng', price: 200000, status: 1},
    { id: '10024', brand: 'Hadalabo', img: './img/SP/0024.jpg', name: 'GEL chống nắng, dưỡng ẩm', price: 280000, status: 1},
    { id: '10025', brand: 'Hadalabo', img: './img/SP/0025.jpg', name: 'Nước tẩy trang sạch sâu, dưỡng trắng', price: 180000, status: 1},
    { id: '10026', brand: 'Maybelline', img: './img/SP/0026.jpg', name: 'Fit Me Foundation', price: 280000, status: 1},
    { id: '10027', brand: 'Maybelline', img: './img/SP/0027.jpg', name: 'Super Stay Full Coverage Foudation', price: 273000, status: 1},
    { id: '10028', brand: 'Maybelline', img: './img/SP/0028.jpg', name: 'Phấn Phủ Nén Maybelline FIT ME Matte Poreless', price: 220000, status: 1},
    { id: '10029', brand: 'Maybelline', img: './img/SP/0029.jpg', name: 'Phấn Phủ Kiềm Dầu Maybelline Fit Me Loose', price: 200000, status: 1},
    { id: '10030', brand: 'Maybelline', img: './img/SP/0030.jpg', name: 'Phấn Nước Dream Fresh Face Liquid Foundation', price: 160000, status: 1},
    { id: '10031', brand: 'Maybelline', img: './img/SP/0031.jpg', name: 'Maybelline Super BB Cushion Fresh Matte', price: 300000, status: 1},
    { id: '10032', brand: 'Maybelline', img: './img/SP/0032.jpg', name: 'Phấn Má Hồng Maybelline Fit Me Blush 4.5gr', price: 150000, status: 1},
    { id: '10033', brand: 'Maybelline', img: './img/SP/0033.jpg', name: 'Che Khuyết Điểm Maybelline Face Studio Master', price: 150000, status: 1},
    { id: '10034', brand: 'Maybelline', img: './img/SP/0034.jpg', name: 'Bút Che Khuyết Điểm Maybelline Instant Age', price: 230000, status: 1},
    { id: '10035', brand: 'Maybelline', img: './img/SP/0035.jpg', name: 'Phấn Mắt Maybelline The Blushed Nudes Palette', price: 314000, status: 1},
    { id: '10036', brand: 'Maybelline', img: './img/SP/0036.jpg', name: 'Phấn Mắt The 24K Nude Eyeshadow Palette', price: 250000, status: 1},
    { id: '10037', brand: 'Maybelline', img: './img/SP/0037.jpg', name: 'Bút Kẻ Mắt Nước Maybelline Hyper Ink 1.5g', price: 170000, status: 1},
    { id: '10038', brand: 'Maybelline', img: './img/SP/0038.jpg', name: 'Mascara Maybelline Lash Sensational', price: 180000, status: 1},
    { id: '10039', brand: 'Maybelline', img: './img/SP/0039.jpg', name: 'Bảng Màu Kẻ Mày Và Tạo Sống Mũi Fashion Brow', price: 230000, status: 1},
    { id: '10040', brand: 'Maybelline', img: './img/SP/0040.jpg', name: 'Chì Kẻ Chân Mày 2 Đầu Maybelline Màu Xám 0.5g', price: 180000, status: 1},
    { id: '10041', brand: 'Maybelline', img: './img/SP/0041.jpg', name: 'Son Kem Lì Maybelline Super Stay Matte Ink', price: 210000, status: 1},
    { id: '10042', brand: 'Maybelline', img: './img/SP/0042.jpg', name: 'Son Tint Maybelline Color Sensational Lip Tint', price: 170000, status: 1},
    { id: '10043', brand: 'Maybelline', img: './img/SP/0043.jpg', name: 'Son Lì Maybelline Lips Vivid Matte 3.9gr', price: 190000, status: 1},
    { id: '10044', brand: 'Maybelline', img: './img/SP/0044.jpg', name: 'Son Lì Maybelline The Loaded Bolds Matte Lips', price: 190000, status: 1},
    { id: '10045', brand: 'Maybelline', img: './img/SP/0045.jpg', name: 'Nước Tẩy Trang Maybelline Micellar Water 400ml', price: 190000, status: 1}
];

onload = () => {
    if (localStorage.getItem('testList') === null)
        localStorage.setItem('testList',JSON.stringify(productData));
    else
        productData = JSON.parse(localStorage.getItem("testList"));
    loadBang()
}

function loadBang(search = "") {
    let dong = ''
    for (let i=0; i<productData.length; i++)
        if (search === "" || productData[i].name.toLowerCase().includes(search.toLowerCase()))
            dong += `            
                <tr>
                    <th>${productData[i].id}</th>
                    <td>${productData[i].name}</td>
                    <td>
                        <img src="../${productData[i].img}" style="width: 100px">
                    </td>
                    <td>${productData[i].brand}</td>
                    <td>${productData[i].price}</td>
                    <td>${productData[i].status}</td>
                    <td>
                        <button class="btn btn-warning" onclick="openForm('Sửa', ${productData[i].id})">Sửa</button><br>
                        <button class="btn btn-danger" onclick="lockProduct(${i})" id="lock">
                            ${(productData[i].status === 0) ? 'Mở khóa' : 'Khóa'}
                        </button>
                    </td>
                </tr>
            `;
    document.getElementById("product-list").innerHTML = dong;
}

function getProduct(id) {
    for (let i=0; i<productData.length; i++)
        if (productData[i].id === `${id}`) return i;
    return -1;
}

function openForm(handle, productID = "") {
    document.getElementById("productModal").innerHTML = "";
    if (productID !== "") var index = getProduct(productID);
    var product = productData[index] || {};
    const modal = document.getElementById("productModal");
    const modalDetail = `
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">${handle} sản phẩm</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                        <div class="mb-3">
                            <label for="product-id" class="col-form-label">ID:</label>
                            <input type="text" class="form-control" id="product-id" value="${product.id || ""}">
                        </div>
                        <div class="mb-3">
                            <label for="product-name" class="col-form-label">Tên sản phẩm:</label>
                            <input type="text" class="form-control" id="product-name" value="${product.name || ""}">
                        </div>
                        <div class="mb-3">
                            <label for="product-brand" class="col-form-label">Thương hiệu:</label>
                            <select name="" class="form-control" id="product-brand">
                                <option value="Innisfree">Innisfree</option>
                                <option value="Hadalabo">Hadabalo</option>
                                <option value="Maybelline">Maybelline</option>
                                <option value="Blackrouge">Blackrouge</option>
                                <option value="Perfect Diary">Perfect Diary</option>
                                <option value="Romand">Romand</option>
                                <option value="Merzy">Merzy</option>
                                <option value="BBIA">BBIA</option>
                                <option value="Laroche Poshy">Laroche Poshy</option>
                                <option value="Vichy">Vichy</option>
                                <option value="L'ORÉAL">L'ORÉAL</option>
                                <option value="Gogotales">Gogotales</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="product-price" class="col-form-label">Giá:</label>
                            <input type="number" min="1000" step="1000" class="form-control" id="product-price" value="${product.price || ""}" onkeyup="checkKey(this, event)">
                        </div>
                        </form>
                    </div>
                    <div class="modal-footer justify-content-center">
                        <button type="button" class="btn btn-success" onclick="handleProduct('${handle}', ${index})" data-bs-dismiss="modal">
                            ${handle}
                        </button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.getElementById("productModal").innerHTML += modalDetail;
    new bootstrap.Modal(modal).show();
}
/*
                        <div class="mb-3">
                            <label for="product-img" class="col-form-label">Hình ảnh:</label>
                            <input type="file" class="form-control" id="product-img" accept="image/*">
                        </div>
 */

function handleProduct(handle, index = 0) {
    if (handle === "Thêm") addProduct()
    else updateProduct(index);
    localStorage.setItem('testList',JSON.stringify(productData));
    loadBang();
}

function addProduct() {
    productData.push({
        id: document.getElementById("product-id").value,
        brand: document.getElementById("product-brand").value,
        img: './img/SP/0045.jpg',
        name: document.getElementById("product-name").value,
        price: Number(document.getElementById("product-price").value),
        status: 1
    });
}

function updateProduct(index) {
    productData.splice(index, 1, {
        id: document.getElementById("product-id").value,
        brand: document.getElementById("product-brand").value,
        img: './img/SP/0045.jpg',
        name: document.getElementById("product-name").value,
        price: Number(document.getElementById("product-price").value),
        status: 1
    });
}

function lockProduct(index) {
    productData[index].status = (productData[index].status === 1) ? 0 : 1;
    localStorage.setItem('testList',JSON.stringify(productData));
    loadBang();
}

function searchProduct() {
    loadBang(document.getElementById("search").value);
}

document.getElementById("search").addEventListener("keyup", event => {
    if (event.key === "Enter") searchProduct();
})

function getProductList() {
    if (localStorage.getItem('testList') === null)
        localStorage.setItem('testList',JSON.stringify(productData));
    productList = JSON.parse(localStorage.getItem('testList'));
    let returnList = new Array();
    for (let i=0; i<productList.length; i++)
        if (productList[i].status === 1) returnList.push(productList[i]);
    return returnList;
}

function checkKey(input, event) {
    if (event.key === "Backspace" || event.key === "Enter") return;
    if (isNaN(event.key)) input.value = input.min;
}