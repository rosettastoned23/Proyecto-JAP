document.addEventListener('DOMContentLoaded', function(){

const productsAutos = "https://japceibal.github.io/emercado-api/cats_products/101.json"

fetch(productsAutos)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let autosProd = document.getElementById("products");
        
    for (let i=0 ; i < data.products.length; i++){
        //console.log(data.products[3].name)
      autosProd.innerHTML +=
        `<div class="container-autos">
            <div onclick="setCatID(${data.products[i].id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src= "${data.products[i].image}" alt="${data.products[i].description}" class="img-thumbnail"">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <div id="datos-auto">
                                <h4 class="mb-1">${data.products[i].name} - ${data.products[i].currency} -  ${data.products[i].cost}</h4>
                            </div>
                            <small class="text-muted">${data.products[i].soldCount} Vendidos</small>
                        </div>
                        <p class="mb-1">${data.products[i].description}</p>
                    </div>
                    
                </div>
            </div>
        </div>`
    }
})
})