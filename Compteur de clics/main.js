let compteur = 0
const btn = document.getElementById("valeur")
function afficher(carcul) {
    if (carcul == "+") {
        btn.textContent = ""
        compteur+=1
        console.log(compteur);
        
        btn.textContent = compteur
    } else if (carcul == "-") {
        btn.textContent = ""
                compteur=compteur - 1

        btn.textContent = compteur 
    } else {
        btn.textContent = ""
        compteur=0
        btn.textContent = compteur
    }



}

document.querySelector("body").addEventListener("click", (e) => {
    const btntarget = e.target
    const checkmoins = btntarget.closest("#moins")
    if (checkmoins != null && compteur > 0) {
        afficher("-")
    }
    const checkPlus = btntarget.closest("#plus")

    if (checkPlus != null) {
        console.log(checkPlus);
        
        afficher("+")

    }
    const checkrest = btntarget.closest("#reset")

    if (checkrest) {

        afficher("rest")


    }


})