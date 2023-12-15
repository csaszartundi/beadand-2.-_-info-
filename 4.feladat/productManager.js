let products = [];

function addProduct() {
    const productName = document.getElementById('productName').value;
    const productPrice = parseFloat(document.getElementById('productPrice').value);

    if (productName && !isNaN(productPrice)) {
        const product = { name: productName, price: productPrice };
        products.push(product);

        displayProducts();
    } else {
        alert('Kérlek add meg a termék nevét és árát!');
    }
}

function displayProducts() {
    const productListElement = document.getElementById('productList');
    productListElement.innerHTML = '';

    products.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name}: ${product.price} Ft`;
        productListElement.appendChild(listItem);
    });
}

function findCheapestProduct() {
    if (products.length > 0) {
        const cheapestProduct = products.reduce((min, product) => (product.price < min.price ? product : min), products[0]);
        document.getElementById('result').textContent = `Legolcsóbb termék: ${cheapestProduct.name}`;
    } else {
        alert('Nincs még termék a listában.');
    }
}

function calculateAverageAndDeviation() {
    if (products.length > 0) {
        const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
        const averagePrice = totalPrice / products.length;

        const priceSquaredDiffSum = products.reduce((sum, product) => sum + Math.pow(product.price - averagePrice, 2), 0);
        const priceDeviation = Math.sqrt(priceSquaredDiffSum / products.length);

        document.getElementById('statistics').textContent = `Átlagár: ${averagePrice.toFixed(2)} Ft, Árak szórása: ${priceDeviation.toFixed(2)} Ft`;
    } else {
        alert('Nincs még termék a listában.');
    }
}
