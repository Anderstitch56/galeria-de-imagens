function abrirLightbox(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");

    lightboxImg.src = img.src;
    lightboxCaption.textContent = img.nextElementSibling.textContent; // pega a legenda
    lightbox.classList.add("show");
}

function fecharLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.classList.remove("show");
}
