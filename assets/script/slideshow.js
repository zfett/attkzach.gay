const ART_SLIDES = document.getElementsByClassName("artSlide");
let currentIdx = 0;

function showSlide(idx) {
    for(i=0;i<ART_SLIDES.length;i++) {
        if (ART_SLIDES[i].index !== currentIdx) {
            ART_SLIDES[i].classList.remove("active");
        }
    }

    ART_SLIDES[idx].classList.add("active");
}

showSlide(currentIdx);
currentIdx += 1;

setInterval(()=>{
    if(currentIdx + 1 > ART_SLIDES.length - 1) {
        currentIdx = 0;
    } else {
        currentIdx += 1;
    }

    showSlide(currentIdx);
}, 4000);