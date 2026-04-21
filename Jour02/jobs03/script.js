function compteur(){
    let count=document.getElementById("compteur");
    let newCount= parseInt(count.textContent) + 1;
    let newElement=document.createElement("p");
    newElement.textContent=newCount;
    count.replaceWith(newElement);
    newElement.setAttribute("id","compteur");

}

document.getElementById("button").addEventListener("click",compteur);
