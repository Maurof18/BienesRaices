//este parte del codigo si utilizo para crear el menu desplegable de un mobile
//donde se agrega y quita una clase al reaccionar ante un click

document.addEventListener('DOMContentLoaded', function(){
    eventListeners();
    darkMode();
});

function darkMode(){
    //cambia de modo oscuro a claro segun como este config el navegador 
    //solo funciono con edge, con chrome no realiza la accion REVISAR
    /**
    const prefiereDarkMode= window.matchMedia('(prefers-color-scheme: dark)');
    console.log(prefiereDarkMode.matches);
    if(prefiereDarkMode.matches){
        document.body.classList.add('dark-mode');
    }else{
        document.body.classList.remove('dark-mode');
    }

    prefiereDarkMode.addEventListener('change',function(){
        if(prefiereDarkMode.matches){
            document.body.classList.add('dark-mode');
        }else{
            document.body.classList.remove('dark-mode');
        }
    })
     */
    const botonDarkMode= document.querySelector('.dark-mode-boton');

    botonDarkMode.addEventListener('click',function(){
        document.body.classList.toggle('dark-mode');
    });
}

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
