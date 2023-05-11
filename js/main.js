function openAndCloseImage(event) {
    let actived = document.getElementsByClassName('gallery-image-active');
    if (actived.length > 0) {
        actived[0].classList.toggle('gallery-image-active');
    } else {
        event.srcElement.classList.toggle('gallery-image-active');
    }
}

window.onload = function(){
    document.querySelector(".preloader").style.display = "none";
}