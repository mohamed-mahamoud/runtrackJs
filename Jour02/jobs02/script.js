/**function showhide(){
    let arcicle = document.querySelector("article");
    if (arcicle.style.display === "none") {
        arcicle.style.display = "block";
    } else {
        arcicle.style.display = "none";
    }
}


document.getElementById("button").addEventListener("click", showhide);//*/

let element=null;
function showhide(){
    if (element===null){
      element=document.createElement("article");
      element.textContent = "La vie a beaucoup plus d’imagination que nous.";
      document.body.appendChild(element);
    } else {
      element.remove();
      element=null;
    }
}

document.getElementById("button").addEventListener("click", showhide);