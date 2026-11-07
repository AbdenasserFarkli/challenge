//  function calculerTTC(HT){
//     const TTC= HT*1.20
//     return TTC

// }

const Prentsul=document.querySelector("ul")
const calculerTTC=(HT)=>{

    const TTC= HT*1.20
    return TTC
}
function afficherPrix(prixHT,selector){
    const TTC=calculerTTC(prixHT)
selector.textContent= `HT : ${prixHT} DH . TTC : ${TTC} DH`
}
afficherPrix(100,Prentsul.children[0])
afficherPrix(45,Prentsul.children[1])
afficherPrix(320,Prentsul.children[2])
