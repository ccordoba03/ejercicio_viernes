
// se define evento para asociar boton de login

var ingreso=document.getElementById("boton");

ingreso.addEventListener("click",function(){

 validar();

});

  
// se genera una funcion validar() que hace toda la validacion en dos pasos


function validar(){

   // se generan variables y expresion regular 
let name=document.getElementById("name").value;
let contraseña=document.getElementById("contraseña").value;
let regexp=/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
let validacion=document.getElementById("boton");
validacion.addEventListener("click",function(){
   expRegular()});
const usuario={
name:"camilocordoba@misena.com",
contraseña:"12345"
}


//la validacion se hace en dos funciones anidadas, la primera valida la expresion regular y el contenido de los campos

function expRegular(){

// si es verdad entre a falso si es falso entre a ciclo verdadd con operador not en expresion regular
if (name.value===null || name.length<=0)  {
   document.getElementById("Error").value="Ingrese su correo";
} else {if(contraseña.value===null||contraseña.length<=0){
  document.getElementById("Error").value="Debe ingresar una contraseña";}
  else if(!regexp.test(name)) {
  document.getElementById("Error").value="Su correo es incorrecto"
 } else {
   validador();  
 }

}
 
// la funcion validador realiza la validacion por numero de caracteres y por contenido del objeto
function validador(){
   if ((contraseña.length)<=4){
    document.getElementById("Error").value="Su contraseña debe tener cuatro o mas caracteres"
  } else{ if(contraseña!==usuario.contraseña){
    document.getElementById("Error").value="Su contraseña es incorrecta";
  } else{if(name!==usuario.name){
    document.getElementById("Error").value="Su correo no esta registrado";

  }else{ window.location.href="contacto.html";}
    
   
  }
  }
  


  }

  }
}









               

