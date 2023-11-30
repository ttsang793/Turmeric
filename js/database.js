let productArray = [
    { id: '10001', brand: 'Innisfree', img: './img/SP/0001.jpg', name: 'Black Tea Youth Enhancing SET', price: 933000 },
    { id: '10002', brand: 'Innisfree', img: './img/SP/0002.jpg', name: 'Innisfree Green Tea Super Skincare SET', price: 1500000 },
    { id: '10003', brand: 'Innisfree', img: './img/SP/0003.jpg', name: 'Apple Seed Cleansing Oil & Apple Seed Lip & Eye Makeup Remover', price: 510000 },
    { id: '10004', brand: 'Innisfree', img: './img/SP/0004.jpg', name: 'Green Tea Hydrating Amino Acid Cleansing Oil 150mL', price: 500000 },
    { id: '10005', brand: 'Innisfree', img: './img/SP/0005.jpg', name: 'Apple Seed Lip & Eye Makeup Remover Tissue 30shts', price: 100000 },
    { id: '10006', brand: 'Innisfree', img: './img/SP/0006.jpg', name: 'Green Tea Hydrating Amino Acid Cleansing Foam 150g', price: 260000 },
    { id: '10007', brand: 'Innisfree', img: './img/SP/0007.jpg', name: 'Green Tea Foam Cleanser 150mL', price: 260000 },
    { id: '10008', brand: 'Innisfree', img: './img/SP/0008.jpg', name: 'Green Tea Balancing Skin EX (Toner)', price: 345000 },
    { id: '10009', brand: 'Innisfree', img: './img/SP/0009.jpg', name: 'Green Tea Fresh Skin Innisfree (Toner)', price: 322000 },
    { id: '10010', brand: 'Innisfree', img: './img/SP/0010.jpg', name: 'Canola Honey Deep-Moisture', price: 130000 },
    { id: '10011', brand: 'Innisfree', img: './img/SP/0011.jpg', name: 'Green Tea Lip', price: 140000 },
    { id: '10012', brand: 'Innisfree', img: './img/SP/0012.jpg', name: 'Real Peppermint Mask (Mặt nạ Bạc hà Innisfree)', price: 240000 },
    { id: '10013', brand: 'Innisfree', img: './img/SP/0013.jpg', name: 'Real Rose Mask (Mặt nạ chiếc xuất Hoa hồng Innisfree)', price: 240000 },
    { id: '10014', brand: 'Innisfree', img: './img/SP/0014.jpg', name: 'Tone Up No Sebum Sunscreen EX SPF 50+ PA++++ 50mL', price: 330000 },
    { id: '10015', brand: 'Innisfree', img: './img/SP/0015.jpg', name: 'Intensive Triple-shield Sunscreen SPF50+ PA++++ 50mL', price: 360000 },
    { id: '10016', brand: 'Innisfree', img: './img/SP/0016.jpg', name: 'Son Kem Lì Innisfree Real Fit Matte Liquid', price: 190000 },
    { id: '10017', brand: 'Innisfree', img: './img/SP/0017.jpg', name: 'Son Lì Innisfree Real Fit Matte Lipstick 3.6gr', price: 230000 },
    { id: '10018', brand: 'Hadalabo', img: './img/SP/0018.jpg', name: 'Hộp mặt nạ tinh chất dưỡng ẩm cao cấp (5 miếng)', price: 195000 },
    { id: '10019', brand: 'Hadalabo', img: './img/SP/0019.jpg', name: 'Sữa rửa mặt dưỡng ẩm cao cấp', price: 125000 },
    { id: '10020', brand: 'Hadalabo', img: './img/SP/0020.jpg', name: 'Dung dịch dưỡng ẩm (Da dầu)', price: 190000 },
    { id: '10021', brand: 'Hadalabo', img: './img/SP/0021.jpg', name: 'Kem dưỡng ẩm', price: 200000 },
    { id: '10022', brand: 'Hadalabo', img: './img/SP/0022.jpg', name: 'Dung dịch dưỡng ẩm (Da thường, Da khô)', price: 190000 },
    { id: '10023', brand: 'Hadalabo', img: './img/SP/0023.jpg', name: 'Sữa dưỡng trắng', price: 200000 },
    { id: '10024', brand: 'Hadalabo', img: './img/SP/0024.jpg', name: 'GEL chống nắng, dưỡng ẩm', price: 280000 },
    { id: '10025', brand: 'Hadalabo', img: './img/SP/0025.jpg', name: 'Nước tẩy trang sạch sâu, dưỡng trắng', price: 180000 },
    { id: '10026', brand: 'Maybelline', img: './img/SP/0026.jpg', name: 'Fit Me Foundation', price: 280000 },
    { id: '10027', brand: 'Maybelline', img: './img/SP/0027.jpg', name: 'Super Stay Full Coverage Foudation', price: 273000 },
    { id: '10028', brand: 'Maybelline', img: './img/SP/0028.jpg', name: 'Phấn Phủ Nén Maybelline FIT ME Matte Poreless', price: 220000 },
    { id: '10029', brand: 'Maybelline', img: './img/SP/0029.jpg', name: 'Phấn Phủ Kiềm Dầu Maybelline Fit Me Loose', price: 200000 },
    { id: '10030', brand: 'Maybelline', img: './img/SP/0030.jpg', name: 'Phấn Nước Dream Fresh Face Liquid Foundation', price: 160000 },
    { id: '10031', brand: 'Maybelline', img: './img/SP/0031.jpg', name: 'Maybelline Super BB Cushion Fresh Matte', price: 300000 },
    { id: '10032', brand: 'Maybelline', img: './img/SP/0032.jpg', name: 'Phấn Má Hồng Maybelline Fit Me Blush 4.5gr', price: 150000 },
    { id: '10033', brand: 'Maybelline', img: './img/SP/0033.jpg', name: 'Che Khuyết Điểm Maybelline Face Studio Master', price: 150000 },
    { id: '10034', brand: 'Maybelline', img: './img/SP/0034.jpg', name: 'Bút Che Khuyết Điểm Maybelline Instant Age', price: 230000 },
    { id: '10035', brand: 'Maybelline', img: './img/SP/0035.jpg', name: 'Phấn Mắt Maybelline The Blushed Nudes Palette', price: 314000 },
    { id: '10036', brand: 'Maybelline', img: './img/SP/0036.jpg', name: 'Phấn Mắt The 24K Nude Eyeshadow Palette', price: 250000 },
    { id: '10037', brand: 'Maybelline', img: './img/SP/0037.jpg', name: 'Bút Kẻ Mắt Nước Maybelline Hyper Ink 1.5g', price: 170000 },
    { id: '10038', brand: 'Maybelline', img: './img/SP/0038.jpg', name: 'Mascara Maybelline Lash Sensational', price: 180000 },
    { id: '10039', brand: 'Maybelline', img: './img/SP/0039.jpg', name: 'Bảng Màu Kẻ Mày Và Tạo Sống Mũi Fashion Brow', price: 230000 },
    { id: '10040', brand: 'Maybelline', img: './img/SP/0040.jpg', name: 'Chì Kẻ Chân Mày 2 Đầu Maybelline Màu Xám 0.5g', price: 180000 },
    { id: '10041', brand: 'Maybelline', img: './img/SP/0041.jpg', name: 'Son Kem Lì Maybelline Super Stay Matte Ink', price: 210000 },
    { id: '10042', brand: 'Maybelline', img: './img/SP/0042.jpg', name: 'Son Tint Maybelline Color Sensational Lip Tint', price: 170000 },
    { id: '10043', brand: 'Maybelline', img: './img/SP/0043.jpg', name: 'Son Lì Maybelline Lips Vivid Matte 3.9gr', price: 190000 },
    { id: '10044', brand: 'Maybelline', img: './img/SP/0044.jpg', name: 'Son Lì Maybelline The Loaded Bolds Matte Lips', price: 190000 },
    { id: '10045', brand: 'Maybelline', img: './img/SP/0045.jpg', name: 'Nước Tẩy Trang Maybelline Micellar Water 400ml', price: 190000 },
];

function createProduct() {
    localStorage.setItem('productsList', JSON.stringify(productArray));
}

function searchProduct(searchString) {
    searchString = searchString.toLowerCase();
    let foundProduct = new Array();
    for (let i=0; i<productArray.length; i++) {
        if (productArray[i].name.toLowerCase().includes(searchString))
            foundProduct.push(productArray[i]);
    }
    localStorage.setItem('productsList', JSON.stringify(foundProduct));
}