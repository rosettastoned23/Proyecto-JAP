const productsAutos = "https://japceibal.github.io/emercado-api/cats_products/101.json"

fetch(productsAutos)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let autos_Prod = document.getElementById("products")
    for (i=0 ; i<data.products.length; i++){
        autos_Prod.innerHTML +=
        `<div class= "container-autos">
            <div class= "prod-name">${data.products[i].name}</div>
            <div class= "products-name">${data.products[i].name}</div>
            <div class= "products-cost">${data.products[i].cost}</div>
            <div class= "products-currency">${data.products[i].currency}</div>
            <div class= "products-description">${data.products[i].description}</div>
            <div class= "products-image"><img src= "${data.products[i].image}"</div>
            <div class= "products-soldCount">${data.products[i].soldCount}vendidos</div>
        </div>`
    }
})