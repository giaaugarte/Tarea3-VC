const products = {
    1: { name: "オリジナルブレンド200g", price: 500 },
    2: { name: "オリジナルブレンド500g", price: 900 },
    3: { name: "スペシャルブレンド200g", price: 700 },
    4: { name: "スペシャルブレンド500g", price: 1200 }
};

let cartItems = [];

function add() {
    const productId = document.getElementById("product").value;
    const productName = products[productId].name;
    const productPrice = products[productId].price;
    const quantity = parseInt(document.getElementById("number").value);
    
    cartItems.push({ name: productName, price: productPrice, quantity: quantity });
    
    display();
}

function display() {
    let cartContent = "カートの中身:\n";
    let subtotal = 0;
    
    for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        cartContent += "商品名: " + item.name + ", 価格: " + item.price + "円, 数量: " + item.quantity + "\n";
        subtotal += item.price * item.quantity;
    }
    
    alert(cartContent + "\n小計: " + subtotal + "円");
}

function calc() {
    let totalAmount = 0;
    let cartContent = "カートの中身:\n";
    
    for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        cartContent += "商品名: " + item.name + ", 価格: " + item.price + "円, 数量: " + item.quantity + "\n";
        totalAmount += item.price * item.quantity;
    }
    
    let shippingCost = 0;
    if (totalAmount < 2000) {
        shippingCost = 500;
    } else if (totalAmount >= 2000 && totalAmount < 3000) {
        shippingCost = 250;
    }

    else if (totalAmount >= 3000) {
        shippingCost = 0;
    }

    totalAmount += shippingCost;

    alert(cartContent + "\n小計: " + totalAmount + "円、送料: " + shippingCost + "円\n合計: " + (totalAmount + shippingCost) + "円");
}