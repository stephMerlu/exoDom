let titre = document.querySelector('h1');
console.log("Premier H1 -> Contenu :", titre.textContent); 

console.log("Récupérer le HTML du premier <li> (3 méthode)")

let firstLi = document.getElementsByTagName('li');
console.log("First LI ", firstLi[0].innerHTML);

let firstLi2 = document.querySelector('li');
console.log("First LI2 ", firstLi2.innerHTML);

let firstLi3 = document.getElementsByTagName('ul');
console.log("First LI3", firstLi3[0].firstElementChild.innerHTML);

console.log("Récupérer le HTML du dernier <li>")

let lastLi = document.getElementsByTagName('ul');
console.log("last LI", lastLi[0].lastElementChild.innerHTML) 

console.log("Récupérer le HTML du troisième <li>")
console.log("Nbre total de LI 4")

let balise3 = document.getElementsByTagName('li');
console.log("troisème LI :", balise3[2].innerHTML)

console.log("HTML du parent de <ul>:")

let parentUl = document.querySelectorAll('ul');
console.log(parentUl[0].parentNode.innerHTML)

let parentUl2 = document.querySelector('#menu');
console.log(parentUl2.innerHTML)

console.log("Nbre total de LI 4")
let balise4 = document.getElementsByTagName('li');
console.log("troisème LI :", balise4[3].innerHTML)
console.log("HTML du parent du quatrième <li>")


let parentLi = document.querySelectorAll('li');
console.log(parentLi[0].parentNode.innerHTML)

let parentLi2 = document.querySelectorAll('ul');
console.log(parentLi2[0].innerHTML);

parentUl2.addEventListener("mouseenter", function survol(event) {
    event.target.style.color = "red";
})

parentUl2.addEventListener("mouseleave", function sortie(event) {
    event.target.style.color = "black";
})