const stock=2
const text =document.getElementById("badge")
// if(stock>0){
//     text.textContent="Disponible"
//     text.classList.add("bg-green-200")
// }else {
//      text.textContent="Rupture"
//     text.classList.add("bg-red-200")
// }
stock>0 ? ( text.textContent="Disponible", text.classList.add("bg-green-200")):text.textContent="Rupture"
   , text.classList.add("bg-red-200")
   
   stock>0 ?stock>=1&&stock<=3?( text.textContent="Presque épuisé", text.classList.add("bg-green-200")): ( text.textContent="Disponible", text.classList.add("bg-green-200")):text.textContent="Rupture"
   , text.classList.add("bg-yellow-200")
   