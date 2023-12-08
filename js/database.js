function filterProduct(filter)  {
    let foundProduct = [
        { id: '10007', brand: 'Innisfree', img: './img/SP/0007.jpg', name: 'Green Tea Foam Cleanser 150mL', price: 260000, type: "Sửa rửa mặt", remain: 50, status: 1},
        { id: '10008', brand: 'Innisfree', img: './img/SP/0008.jpg', name: 'Green Tea Balancing Skin EX (Toner)', price: 345000, type: "Sửa rửa mặt", remain: 50, status: 1},
        { id: '10009', brand: 'Innisfree', img: './img/SP/0009.jpg', name: 'Green Tea Fresh Skin Innisfree (Toner)', price: 322000, type: "Sửa rửa mặt", remain: 0, status: 1},
        { id: '10012', brand: 'Innisfree', img: './img/SP/0012.jpg', name: 'Real Peppermint Mask (Mặt nạ Bạc hà Innisfree)', price: 240000, type: "Mặt nạ", remain: 50, status: 1},
        { id: '10013', brand: 'Innisfree', img: './img/SP/0013.jpg', name: 'Real Rose Mask (Mặt nạ chiếc xuất Hoa hồng Innisfree)', price: 240000, type: "Mặt nạ", remain: 50, status: 1},
        { id: '10018', brand: 'Hadalabo', img: './img/SP/0018.jpg', name: 'Hộp mặt nạ tinh chất dưỡng ẩm cao cấp (5 miếng)', price: 195000, type: "Mặt nạ", remain: 0, status: 1},
        { id: '10042', brand: 'Maybelline', img: './img/SP/0042.jpg', name: 'Son Tint Maybelline Color Sensational Lip Tint', price: 170000, type: "Son", remain: 50, status: 1},
        { id: '10043', brand: 'Maybelline', img: './img/SP/0043.jpg', name: 'Son Lì Maybelline Lips Vivid Matte 3.9gr', price: 190000, type: "Son", remain: 50, status: 1},
        { id: '10044', brand: 'Maybelline', img: './img/SP/0044.jpg', name: 'Son Lì Maybelline The Loaded Bolds Matte Lips', price: 190000, type: "Son", remain: 0, status: 1},
    
        { id: '10001', brand: 'Innisfree', img: './img/SP/0007.jpg', name: 'Green Tea Foam Cleanser 150mL', price: 260000, type: "Sửa rửa mặt", remain: 50, status: 1},
        { id: '10002', brand: 'Innisfree', img: './img/SP/0008.jpg', name: 'Green Tea Balancing Skin EX (Toner)', price: 345000, type: "Sửa rửa mặt", remain: 50, status: 1},
        { id: '10003', brand: 'Innisfree', img: './img/SP/0009.jpg', name: 'Green Tea Fresh Skin Innisfree (Toner)', price: 322000, type: "Sửa rửa mặt", remain: 0, status: 1},
        { id: '10004', brand: 'Innisfree', img: './img/SP/0012.jpg', name: 'Real Peppermint Mask (Mặt nạ Bạc hà Innisfree)', price: 240000, type: "Mặt nạ", remain: 50, status: 1},
        { id: '10005', brand: 'Innisfree', img: './img/SP/0013.jpg', name: 'Real Rose Mask (Mặt nạ chiếc xuất Hoa hồng Innisfree)', price: 240000, type: "Mặt nạ", remain: 50, status: 1},
        { id: '10006', brand: 'Hadalabo', img: './img/SP/0018.jpg', name: 'Hộp mặt nạ tinh chất dưỡng ẩm cao cấp (5 miếng)', price: 195000, type: "Mặt nạ", remain: 0, status: 1},
        { id: '10014', brand: 'Maybelline', img: './img/SP/0042.jpg', name: 'Son Tint Maybelline Color Sensational Lip Tint', price: 170000, type: "Son", remain: 50, status: 1},
        { id: '10015', brand: 'Maybelline', img: './img/SP/0043.jpg', name: 'Son Lì Maybelline Lips Vivid Matte 3.9gr', price: 190000, type: "Son", remain: 50, status: 1},
        { id: '10016', brand: 'Maybelline', img: './img/SP/0044.jpg', name: 'Son Lì Maybelline The Loaded Bolds Matte Lips', price: 190000, type: "Son", remain: 0, status: 1},
    
    
        { id: '10001', brand: 'Innisfree', img: './img/SP/0007.jpg', name: 'Green Tea Foam Cleanser 150mL', price: 260000, type: "Sửa rửa mặt", remain: 50, status: 1},
        { id: '10002', brand: 'Innisfree', img: './img/SP/0008.jpg', name: 'Green Tea Balancing Skin EX (Toner)', price: 345000, type: "Sửa rửa mặt", remain: 50, status: 1},
        { id: '10003', brand: 'Innisfree', img: './img/SP/0009.jpg', name: 'Green Tea Fresh Skin Innisfree (Toner)', price: 322000, type: "Sửa rửa mặt", remain: 0, status: 1},
        { id: '10004', brand: 'Innisfree', img: './img/SP/0012.jpg', name: 'Real Peppermint Mask (Mặt nạ Bạc hà Innisfree)', price: 240000, type: "Mặt nạ", remain: 50, status: 1},
        { id: '10005', brand: 'Innisfree', img: './img/SP/0013.jpg', name: 'Real Rose Mask (Mặt nạ chiếc xuất Hoa hồng Innisfree)', price: 240000, type: "Mặt nạ", remain: 50, status: 1},
        { id: '10006', brand: 'Hadalabo', img: './img/SP/0018.jpg', name: 'Hộp mặt nạ tinh chất dưỡng ẩm cao cấp (5 miếng)', price: 195000, type: "Mặt nạ", remain: 0, status: 1},
        { id: '10014', brand: 'Maybelline', img: './img/SP/0042.jpg', name: 'Son Tint Maybelline Color Sensational Lip Tint', price: 170000, type: "Son", remain: 50, status: 1},
        { id: '10015', brand: 'Maybelline', img: './img/SP/0043.jpg', name: 'Son Lì Maybelline Lips Vivid Matte 3.9gr', price: 190000, type: "Son", remain: 50, status: 1},
        { id: '10016', brand: 'Maybelline', img: './img/SP/0044.jpg', name: 'Son Lì Maybelline The Loaded Bolds Matte Lips', price: 190000, type: "Son", remain: 0, status: 1},
    
    
        { id: '10001', brand: 'Innisfree', img: './img/SP/0007.jpg', name: 'Green Tea Foam Cleanser 150mL', price: 260000, type: "Sửa rửa mặt", remain: 50, status: 1},
        { id: '10002', brand: 'Innisfree', img: './img/SP/0008.jpg', name: 'Green Tea Balancing Skin EX (Toner)', price: 345000, type: "Sửa rửa mặt", remain: 50, status: 1},
        { id: '10003', brand: 'Innisfree', img: './img/SP/0009.jpg', name: 'Green Tea Fresh Skin Innisfree (Toner)', price: 322000, type: "Sửa rửa mặt", remain: 0, status: 1},
        { id: '10004', brand: 'Innisfree', img: './img/SP/0012.jpg', name: 'Real Peppermint Mask (Mặt nạ Bạc hà Innisfree)', price: 240000, type: "Mặt nạ", remain: 50, status: 1},
        { id: '10005', brand: 'Innisfree', img: './img/SP/0013.jpg', name: 'Real Rose Mask (Mặt nạ chiếc xuất Hoa hồng Innisfree)', price: 240000, type: "Mặt nạ", remain: 50, status: 1},
        { id: '10006', brand: 'Hadalabo', img: './img/SP/0018.jpg', name: 'Hộp mặt nạ tinh chất dưỡng ẩm cao cấp (5 miếng)', price: 195000, type: "Mặt nạ", remain: 0, status: 1},
        { id: '10014', brand: 'Maybelline', img: './img/SP/0042.jpg', name: 'Son Tint Maybelline Color Sensational Lip Tint', price: 170000, type: "Son", remain: 50, status: 1},
        { id: '10015', brand: 'Maybelline', img: './img/SP/0043.jpg', name: 'Son Lì Maybelline Lips Vivid Matte 3.9gr', price: 190000, type: "Son", remain: 50, status: 1},
        { id: '10016', brand: 'Maybelline', img: './img/SP/0044.jpg', name: 'Son Lì Maybelline The Loaded Bolds Matte Lips', price: 190000, type: "Son", remain: 0, status: 1},
    
    
        { id: '10001', brand: 'Innisfree', img: './img/SP/0007.jpg', name: 'Green Tea Foam Cleanser 150mL', price: 260000, type: "Sửa rửa mặt", remain: 50, status: 1},
        { id: '10002', brand: 'Innisfree', img: './img/SP/0008.jpg', name: 'Green Tea Balancing Skin EX (Toner)', price: 345000, type: "Sửa rửa mặt", remain: 50, status: 1},
        { id: '10003', brand: 'Innisfree', img: './img/SP/0009.jpg', name: 'Green Tea Fresh Skin Innisfree (Toner)', price: 322000, type: "Sửa rửa mặt", remain: 0, status: 1},
        { id: '10004', brand: 'Innisfree', img: './img/SP/0012.jpg', name: 'Real Peppermint Mask (Mặt nạ Bạc hà Innisfree)', price: 240000, type: "Mặt nạ", remain: 50, status: 1},
        { id: '10005', brand: 'Innisfree', img: './img/SP/0013.jpg', name: 'Real Rose Mask (Mặt nạ chiếc xuất Hoa hồng Innisfree)', price: 240000, type: "Mặt nạ", remain: 50, status: 1},
        { id: '10006', brand: 'Hadalabo', img: './img/SP/0018.jpg', name: 'Hộp mặt nạ tinh chất dưỡng ẩm cao cấp (5 miếng)', price: 195000, type: "Mặt nạ", remain: 0, status: 1},
        { id: '10014', brand: 'Maybelline', img: './img/SP/0042.jpg', name: 'Son Tint Maybelline Color Sensational Lip Tint', price: 170000, type: "Son", remain: 50, status: 1},
        { id: '10015', brand: 'Maybelline', img: './img/SP/0043.jpg', name: 'Son Lì Maybelline Lips Vivid Matte 3.9gr', price: 190000, type: "Son", remain: 50, status: 1},
        { id: '10016', brand: 'Maybelline', img: './img/SP/0044.jpg', name: 'Son Lì Maybelline The Loaded Bolds Matte Lips', price: 190000, type: "Son", remain: 0, status: 1},
    
    ];
    let i = 0;

    if (filter.searchString !== undefined && filter.searchString !== null && filter.searchString !== "") {
        filter.searchString = filter.searchString.toLowerCase();
        while (i < foundProduct.length) {
            if (!foundProduct[i].name.toLowerCase().includes(filter.searchString))
                foundProduct.splice(i--, 1);
            ++i;
        }
    }
    
    i = 0;
    if (!(filter.priceMin === 0 && filter.priceMax === 0))
        while (i < foundProduct.length) {
            let temp = Number(foundProduct[i].price);
            if (temp < filter.priceMin || temp > filter.priceMax)
                foundProduct.splice(i--, 1);
            ++i;
        }

    i = 0;
    if (filter.searchBrand.length > 0)
        while (i < foundProduct.length) {
            if (!filter.searchBrand.includes(foundProduct[i].brand))
                foundProduct.splice(i--, 1);
            ++i;
        }

    i = 0;
    if (filter.searchType.length > 0)
        while (i < foundProduct.length) {
            if (!filter.searchType.includes(foundProduct[i].type))
                foundProduct.splice(i--, 1);
            ++i;
        }

    i = 0;
    if (filter.checked)
        while (i < foundProduct.length) {
            if (foundProduct[i].remain === 0)
                foundProduct.splice(i--, 1);
            ++i;
        }

    if (filter.index > 0) {
        if (filter.index === 1 || filter.index === 2) {
            for (i = foundProduct.length - 1; i>0; i--)
                for (let j=0; j<i; j++) {
                    let price1 = Number(foundProduct[j].price);
                    let price2 = Number(foundProduct[j+1].price);
                    if((filter.index === 1 && price1 > price2) || (filter.index === 2 && price1 < price2))
                        [foundProduct[j], foundProduct[j+1]] = [foundProduct[j+1], foundProduct[j]];
                }
        }
        else {        
            for (i = foundProduct.length - 1; i>0; i--)
                for (let j=0; j<i; j++) {
                    let letter1 = foundProduct[j].name.toLowerCase();
                    let letter2 = foundProduct[j+1].name.toLowerCase();
                    if((filter.index === 3 && letter1 > letter2) || (filter.index === 4 && letter1 < letter2))
                        [foundProduct[j], foundProduct[j+1]] = [foundProduct[j+1], foundProduct[j]];
                }
        }
    }
    localStorage.setItem('productsList', JSON.stringify(foundProduct));
}

function initCart(){
    if (localStorage.getItem('cartList') === null) {
        let initCart = [];
        localStorage.setItem('cartList',JSON.stringify(initCart));
    }
}

function initOrder() {
    if(localStorage.getItem('orderList') === null){
        let initOrder = [];
        localStorage.setItem('orderList',JSON.stringify(initOrder));
    }
}