//este parte del codigo si utilizo para crear el menu desplegable de un mobile
//donde se agrega y quita una clase al reaccionar ante un click

document.addEventListener('DOMContentLoaded', function(){
    eventListeners();
})

function eventListeners(){
    const mobileMenu=document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click', navegacionResponsive);
}
function navegacionResponsive(){
    const navegacion= document.querySelector('.navegacion');
    
    //el codigo de abajo simplifica al if y la accion que realiza
    //navegacion.classList.toggle(mostrar)
    if(navegacion.classList.contains('mostrar')){
        navegacion.classList.remove('mostrar');
    }else{
        navegacion.classList.add('mostrar');
    }
}
