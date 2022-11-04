function calcular()
{


   quitarClaseError();

   if(Nombre.value==="")
   {
       alert("Escribir nombre...");
       Nombre.classList.add("is-invalid");
       Nombre.focus();
       return ;
   }

   if(Apellido.value==="")
   {
       alert("Escribir apellido...");
       Apellido.classList.add("is-invalid");
       Apellido.focus();
       return ;
   }

   if(Correo.value==="")
   {
       alert("Escribir correo...");
       Correo.classList.add("is-invalid");
       Correo.focus();
       return ;
   }

    // Para determinar si el correo electrónico es válido o no
    const correoValido = Correo => 
    {
       return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Correo);
    }

    if(!correoValido(Correo.value))
    {
       alert("Escribir bien el correo...");
       Correo.classList.add("is-invalid");
       Correo.focus();
       return ;
    }

    if( (Cantidad.value<=0)|| (isNaN(Cantidad.value)))
    {
        alert("Ingrese una cantidad...");
        Cantidad.classList.add("is-invalid");
        Cantidad.focus();
        return ;
    }

   if(Categorias.value==="")
   {
       alert("Seleccione una categoria...");
       Categorias.classList.add("is-invalid");
       Categorias.focus();
       return ;
   }


//Definir los descuentos segun categoria
let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;

//Defino valor de entrada.
const valorTicket=200;

//capturar en variables mis datos

Cantidad        = document.getElementById("Cantidad").value;
Nombre =document.getElementById("Nombre");
Apellido =document.getElementById("Apellido");
Correo =document.getElementById("Correo");


var select=document.getElementById("Categorias");
var valorSel=select.options[select.selectedIndex].value;

result=0

switch(valorSel=parseInt(valorSel))

{
   case 0:
      result=valorTicket*Cantidad;
      break;
    case 1:
        result=valorTicket * Cantidad - ((valorTicket*descuentoEstudiante/100)*Cantidad);
        break;
        

    case 2:
        result=valorTicket * Cantidad - ((valorTicket*descuentoTrainee/100)*Cantidad);
        break;

    case 3:
        result=valorTicket * Cantidad - ((valorTicket*descuentoJunior/100)*Cantidad);
        break;

}
    Total =document.getElementById("Total").value=result;

}

function quitarClaseError()
{
    let x=document.querySelectorAll(".form-control,.form-select");
    let i;
    for(i=0;i<x.length;i++)
    {
        x[i].classList.remove("is-invalid");
    }
}
 

function reset(){
   Total.innerHTML="";
}




























































