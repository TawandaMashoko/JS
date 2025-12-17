const products = [
    {name: 'Laptop', price: 1000},
    {name: 'Backpack', price: 2345},
    {name: 'Icebag', price: 2000},
]

products.map((product) =>{
    console.log(`The price of ${product.name} is $:${product.price}`);
});