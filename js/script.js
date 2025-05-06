
const imageBouton = document.querySelectorAll(".img");

const modale1 = document.querySelector(".modale1");
const modale2 = document.querySelector(".modale2");
const modale3 = document.querySelector(".modale3");


for (let i = 0; i < imageBouton.length; i++) {

    if (i == 0) {
        
        imageBouton[i].addEventListener("click", openImageLeo);

    } else if (i == 1) {

        imageBouton[i].addEventListener("click", openImageCamille);

    } else if (i == 2) {

        imageBouton[i].addEventListener("click", openImageMaxime);

    }

}



function openImageLeo(e) {
    e.preventDefault();
    
    modale1.classList.add("visible");
    modale1.addEventListener('click', closeModale);

    document.body.style.overflow = "hidden";
        
}

function openImageCamille(e) {
    e.preventDefault();

    modale2.classList.add("visible");
    modale2.addEventListener('click', closeModale);

    document.body.style.overflow = "hidden";

}

function openImageMaxime(e) {
    e.preventDefault();

    modale3.classList.add("visible");
    modale3.addEventListener('click', closeModale);

    document.body.style.overflow = "hidden";

}

function closeModale(event) {
    modale1.classList.remove("visible");
    modale2.classList.remove("visible");
    modale3.classList.remove("visible");

    modale1.classList.remove("leo");
    modale2.classList.remove("camille");
    modale3.classList.remove("maxime");

    document.body.style.overflow = "";

}