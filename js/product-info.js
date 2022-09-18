let idProductos = localStorage.getItem('prodID')
let productsInfo = `https://japceibal.github.io/emercado-api/products/${idProductos}.json`;
let comentUrl = `https://japceibal.github.io/emercado-api/products_comments/${idProductos}.json`;
let comentArray = []

fetch(productsInfo)
    .then(response => response.json())
    .then(data => {
        console.log(comentUrl)
        let datos = document.getElementById('cont-info')
        datos.innerHTML += `
        <div class="container-info" id="container-info">
            <div class="container2">
                <br><h3>${data.name}</h3>
                <hr>
                <div class="container3">
                    <h4>Costo</h4>
                    <p> ${data.cost} - ${data.currency}</p>
                    <h4>Descripción</h4>
                    <p>${data.description}</p>
                    <h4>Categoría</h4>
                    <p>${data.category}</p>
                    <h4>Cantidad de productos vendidos</h4>
                    <p>${data.soldCount}</p><hr>
                </div>
            </div>
            <div class="container1">
                <div class="row">
                <h4><b>Imágenes del producto:</b><h3>
                    <img class="col-2" src= "${data.images[0]}" >
                    <img class="col-2" src= "${data.images[1]}">
                    <img class="col-2" src= "${data.images[2]}">
                    <img class="col-2" src= "${data.images[3]}">
                    <br><br><hr>
                    <h4><b>Comentarios:</b></h4>
                    <br>
                </div> 
            </div>
        </div>`

    });

    fetch(comentUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        comentArray = data;
        showComents()
    });
    function showComents(){

        let htmlContentToAppend = "";
            for (let i=0 ; i < comentArray.length; i++){
                let coments = comentArray[i];
                htmlContentToAppend +=
                `<div class="comentsContainer" >
                    <div class="comentarios">
                    <br>
                    <p>-${coments.user} - ${coments.dateTime} </p>
                    <p>${coments.score}
                    <span class="fa fa-star ${coments.score >= 1 ? "checked" : "no-checked"}"></span>
                    <span class="fa fa-star ${coments.score >= 2 ? "checked" : "no-checked"}"></span>
                    <span class="fa fa-star ${coments.score >= 3 ? "checked" : "no-checked"}"></span>
                    <span class="fa fa-star ${coments.score >= 4 ? "checked" : "no-checked"}"></span>
                    <span class="fa fa-star ${coments.score >= 5 ? "checked" : "no-checked"}"></span></p>
                    <br>
                    <p>${coments.product} - ${coments.description}</p>
                    </div>
                </div>`
                
            }
            document.getElementById("cont-coments").innerHTML = htmlContentToAppend;
        };
        
document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById('form').addEventListener('submit', (e)=>{
        e.preventDefault()
        let comentario = document.getElementById('text-coment').value;
        let puntaje = document.getElementById('puntaje').value;
        let usuario = localStorage.getItem('email')
        let fecha = new Date()
        fecha = fecha.toDateString()
        console.log(comentario)
        console.log(puntaje)
        console.log(usuario)
        console.log(fecha)
            
       let htmlContentToAppend =
            `<div class="comentsContainer" >
                <div class="comentarios">
                <br>
                <p>-${usuario} - ${fecha} </p>
                <p>${puntaje}
                <span class="fa fa-star ${puntaje >= 1 ? "checked" : "no-checked"}"></span>
                <span class="fa fa-star ${puntaje >= 2 ? "checked" : "no-checked"}"></span>
                <span class="fa fa-star ${puntaje >= 3 ? "checked" : "no-checked"}"></span>
                <span class="fa fa-star ${puntaje >= 4 ? "checked" : "no-checked"}"></span>
                <span class="fa fa-star ${puntaje >= 5 ? "checked" : "no-checked"}"></span></p>
                <p>${comentario}</p>
                </div>
            </div>`
        document.getElementById("cont-coments").innerHTML += htmlContentToAppend;
    });
});
