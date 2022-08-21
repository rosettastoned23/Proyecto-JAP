function login(){
    let email= document.getElementById('email');
    let contra= document.getElementById('contra');


    if (email.value != "" && contra.value != ""){
        window.location.href = "principal.html";
    } 
    else {
        email.classList.add("rojo");
        contra.classList.add("rojo");
    }
    }
    //console.log(login)

document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById('form').addEventListener('submit', (e)=>{
        e.preventDefault()
        login();
})
})

function Credencial(){
        window.location.href = "principal.html";
    } 
   // console.log(window.location)



