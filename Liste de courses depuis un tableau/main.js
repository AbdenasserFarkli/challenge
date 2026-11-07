const courses = ['Pain', 'Lait', 'Œufs', 'Tomates'];
console.log(courses[0]);
console.log(courses[courses.length-1]);
console.log(courses.length);

document.getElementById("total").textContent=`articles : ${courses.length}`
const parentUl = document.getElementById("liste")
// for (let i = 0; i < courses.length; i++) {
//     const li = document.createElement("li")
//     li.textContent=courses[i]
//     parentUl.appendChild(li)
    
// }
courses.forEach(element => {
     const li = document.createElement("li")
    li.textContent=element
    parentUl.appendChild(li)
    
    
});
courses.push('cafe')
