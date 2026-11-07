let note=0
const parentsnote =document.getElementById("notes")
function addelement() {
    const li = document.createElement("li")
    note=note+1
    li.textContent=`Note n° ${note}`
li.classList.add("p-2", "bg-yellow-100", "rounded");    parentsnote.prepend(li)
    
}
document.getElementById("ajouter").addEventListener("click",addelement)