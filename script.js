document.getElementById('order-type').addEventListener('change', function() {
    const deliveryAddress = document.getElementById('delivery-address');
    if (this.value === 'delivery') {
        deliveryAddress.style.display = 'block';
    } else {
        deliveryAddress.style.display = 'none';
    }
});

function submitOrder() {
    const pizza =  Array.from(document.getElementById('pizza').selectedOptions).map(option => option.value);
    const pizzaPrice = pizza.map(piz => parseFloat(piz.split('-')[1]));
    
    const toppings = Array.from(document.getElementById('toppings').selectedOptions).map(option => option.value);
    const toppingPrices = toppings.map(topping => parseFloat(topping.split('-')[1]));

    const sides = Array.from(document.getElementById('sides').selectedOptions).map(option => option.value);
    const sidePrices = sides.map(side => parseFloat(side.split('-')[1]));

    const drinks = Array.from(document.getElementById('drinks').selectedOptions).map(option => option.value);
    const drinkPrices = drinks.map(drink => parseFloat(drink.split('-')[1]));

    const orderType = document.getElementById('order-type').value;
    const address = document.getElementById('address').value;

    const totalPrice = pizzaPrice.reduce((a, b) => a + b, 0) + toppingPrices.reduce((a, b) => a + b, 0) + sidePrices.reduce((a, b) => a + b, 0) + drinkPrices.reduce((a, b) => a + b, 0);

    let orderSummary = `Pizza: ${pizza}\nToppings: ${toppings.join(', ')}\nSides: ${sides.join(', ')}\nDrinks: ${drinks.join(', ')}\nOrder Type: ${orderType}\nTotal Price: $${totalPrice.toFixed(2)}`;
    if (orderType === 'delivery') {
        orderSummary += `\nDelivery Address: ${address}\nyour order will be delivered in 20-30 mins`;
    }
    else{
        orderSummary += `\nyour order will be prepared in 2-3 mins`
    }
    console.log(orderSummary);

    alert(`Order Summary:\n${orderSummary}\n\nThank you for your order!`);
}