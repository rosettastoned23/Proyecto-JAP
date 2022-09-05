let idCategorias = localStorage.getItem('catID')
let productsAutos = `https://japceibal.github.io/emercado-api/cats_products/${idCategorias}.json`
let productArray = [];
let filtrar = document.getElementById('rangeFilterCount');
let arrayOriginal = [];
let inputminimo = document.getElementById("rangeFilterCountMin");
let inputmaximo = document.getElementById("rangeFilterCountMax");
let criterio = 0;



fetch(productsAutos)
    .then(response => response.json())
    .then(data => {
        arrayOriginal = data.products;
        productArray = data.products;
        showProducts()
    });

function showProducts(){

    let htmlContentToAppend = "";
        ordenarProductos()
        for (let i=0 ; i < productArray.length; i++){
            products = productArray[i];
            
            htmlContentToAppend +=
            `<div class="container-autos">
                <div onclick="setCatID(${products.id})" class="list-group-item list-group-item-action cursor-active">
                    <div class="row">
                        <div class="col-3">
                            <img src= "${products.image}" alt="${products.description}" class="img-thumbnail"">
                        </div>
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <div id="datos-auto">
                                    <h4 class="mb-1">${products.name} - ${products.currency} -  ${products.cost}</h4>
                                </div>
                                <small class="text-muted">${products.soldCount} Vendidos</small>
                            </div>
                            <p class="mb-1">${products.description}</p>
                        </div>
                        
                    </div>
                </div>
            </div>`
        }
                
            
    document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
}


filtrar.addEventListener('click', () =>{
   
    productArray =  arrayOriginal.filter(producto => 
        ((producto.cost >= inputminimo.value) && (producto.cost <= inputmaximo.value)) )
   //console.log(productArray)
   showProducts()
});


function ordenarProductos(){
        
    if (criterio == 0) return;
    if (criterio == 1) {
        productArray.sort(function(a, b){
            if (a.cost < b.cost) {
                return -1;
            } 
            if (a.cost > b.cost) {
                return 1;
            }
            return 0;
        });  
    }
    if (criterio == 2) {
        productArray.sort(function(a, b){
            if (a.cost > b.cost) {
                return -1;
            } 
            if (a.cost < b.cost) {
                return 1;
            }
            return 0;
        });
    }
    if (criterio == 3) {
        productArray.sort(function(a, b){
            if (a.soldCount > b.soldCount) {
                return -1;
            } 
            if (a.soldCount < b.soldCount) {
                return 1;
            }
            return 0;
        
        });
    }
};

    document.getElementById('sortAsc').addEventListener('click', () =>{criterio=1
        showProducts()});
    document.getElementById('sortDesc').addEventListener('click', () =>{criterio=2
        showProducts()});
    document.getElementById('sortByCount').addEventListener('click', () =>{criterio=3
        showProducts();});

        

    document.getElementById("clearRangeFilter").addEventListener("click", function(){
            document.getElementById("rangeFilterCountMin").value = "";
            document.getElementById("rangeFilterCountMax").value = "";
            showProducts();
    });