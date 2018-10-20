
const navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/

var cont=1;
var bitacoras=[];
var formulario =document.getElementById("bitacora")

formulario.addEventListener("submit", (evt) => {
    evt.preventDefault(); 
    let bitacora = { 
        cant:cont, 
        fecha: formulario[1].value, 
        descripcion: formulario[2].value, 
        cantidad: formulario[3].value 
      } 
      if ( formulario[1].value === "" || formulario[2].value === "" || formulario[3].value === "" ){
        formulario[1].style.borderColor = "red";
        formulario[2].style.borderColor = "red";
        formulario[3].style.borderColor = "red";
    } else {
        formulario[1].style.borderColor = "green";
        formulario[2].style.borderColor = "green";
        formulario[3].style.borderColor = "green";
      
      bitacoras.push(bitacora);
   cont++;
   mostrar();
    }
});     

const crearElemento = (bitacora, tbody) =>{ 
      let tr = document.createElement("tr"); 
      Object.values(bitacora).forEach(item => { 
        let td = document.createElement("td"); 
        let content = document.createTextNode(item); 
        td.appendChild(content); 
        tr.setAttribute("class", "click"); 
   tr.appendChild(td); 
  }); 
 tbody.appendChild(tr); 
 
} 

const eliminar= (tbody)=>{
    while (tbody.firstChild) {
     tbody.removeChild(tbody.firstChild);
    }
   }

   const agregar= ()=>{ 
    var eventtr = document.querySelectorAll(".click"); 
      eventtr.forEach((item, index) => { 
      item.addEventListener("click", () => { 
      document.querySelector("#fecha").value = item.childNodes[1].textContent; 
      document.querySelector("#descp").value = item.childNodes[2].textContent; 
      document.querySelector("#cant").value = item.childNodes[3].textContent; 
      
     }); 
    }) 
   } 


   const mostrar = ()=>{ 
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) { 
     eliminar(document.querySelector(".tabla-btc tbody")); 
    } 
    bitacoras.forEach(item => { 
     crearElemento(item, document.querySelector(".tabla-btc tbody")); 
    }); 
    agregar(); 
   } 

 


   /*
   ¿Qué contienen la variable formulario ?
   el contenido de el tag form
   ¿Qué hace el método evt.preventDefault() ?
detiene la accion default de un metodo

   ¿Qué es lo que contiene formulario[x]?
   los nodos de fecha, descripcion y capacidad

   ¿Qué contienen las variables tr y td ?
un nodo de tipo tr y td


¿Qué contienen la variable content ?
Los datos ingresados por nodo

¿Qué valor tendra tbody al finalizar la iteración?
el valor del nodo tr, que a su vez tiene dentro el nodo td y content

Describa en pocas palabras lo que realizara esta función
Agrega los datos ingresados por nodo

¿Qué es lo que hace .firstChild?
Selecciona el primer elemento

Después de realizar el while ¿Comó quedara el elemento tbody ?

¿Qué es lo que obtenemos cuando se ejecuta item.childNodes[i].textContent;

¿Qué es lo que obtenemos cuando se realiza document.querySelector(".tabla-btc tbody") ?

 ¿Qué hace el método childElementCount?

¿Qué se mostrara en pantalla cuando se ejecute la función agregar()?

 ¿Qué se mostrara en el navegador despues de ejecutar la función mostrar?

   */