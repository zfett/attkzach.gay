const HEADER_MENU_BTN = document.getElementById("headerMenuButton");
const HEADER_MENU_ELEM = document.getElementById("headerNavigation");

let isMenuVisible = false;

function toggleMenu() {
    if(isMenuVisible) {
        isMenuVisible = false;
        HEADER_MENU_ELEM.classList.remove("active");
    } else {
        isMenuVisible = true;
        HEADER_MENU_ELEM.classList.add("active");
    }
}