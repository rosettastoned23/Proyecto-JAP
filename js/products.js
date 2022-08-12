const productsAutos = "https://japceibal.github.io/emercado-api/cats_products/101.json"

fetch(productsAutos)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let autos_Prod = document.getElementById("productos")
    for (i=0 ; i<data.productos.length; i++){
        autos_Prod.innerHTML +=
        `<div class= "container-autos">
            <div class= "prod-name">${data.productos[i].name}</div>
            <div class= "prod-cost">${data.productos[i].cost}</div>
            <div class= "prod-currency">${data.productos[i].currency}</div>
            <div class= "prod-description">${data.productos[i].description}</div>
            <div class= "prod-image"><img src= "${data.productos[i].image}"</div>
            <div class= "prod-soldCount">${data.productos[i].soldCount}vendidos</div>
        </div>`
    }
});