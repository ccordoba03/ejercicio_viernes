function calculo_talla(){
  var altura=document.getElementById("ALTURA").value;
  var peso =document.getElementById("PESO").value;
  var calculo=((altura/100+peso/100));

//validacion por campo vacio
if (altura.value===null||altura.length==0){
  alert("Debe escribir un numero en el campo altura");
}else{if(peso.value===null||peso.length==0){
  alert("Debe escribir un numero en el campo peso");
}else{if(altura.length>3){
  alert("debe escribir un numero de tres (3) digitos");
}else{if(peso.length>3){
  alert("debe escribir un numero de tres (3) digitos")}
else{talla(calculo);}}




// funcion de calculo de  talla
 function talla() {if((calculo>=2.05&&calculo <=2.23)){
  document.getElementById("TALLA").value=`SU TALLA ES A1`;
 } else{ if (calculo>=2.25&&calculo<=2.42) {
  document.getElementById("TALLA").value=`SU TALLA ES A2`;
 }else {if (calculo>=2.42&&calculo<=2.67) {
  document.getElementById("TALLA").value=`SU TALLA ES A3`;
 } else {if (calculo>=2.67&&calculo<=3.09){
  document.getElementById("TALLA").value=`SU TALLA ES A4`;}
else{if(calculo>3.09){
  document.getElementById("TALLA").value="Revise el listado de tallas extragrandes"
}else{if(calculo<2.05){
  document.getElementById("TALLA").value="Revise el listado de tallas para niños"}
}

}}}}}
}}}










    
  