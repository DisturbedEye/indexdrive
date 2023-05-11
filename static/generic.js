const dom = document;
const menu = dom.querySelector(".side-menu");
/////////Show Page//////////
dom.querySelectorAll(".page-opener").forEach(location => {
    location.addEventListener("click", (e) => {
        let targetClass = e.target.className;
        if (targetClass.search("page-opener") !== -1){
            let bridges = dom.getElementsByClassName(targetClass.split(' ').find(element => element.match(/page\d+/)));
            for (const bridge of bridges){
                bridge.classList.add("-visible");
            }
            dom.body.style.overflow = "hidden";
        }
    });
});
dom.querySelectorAll(".page-closer").forEach(location => {
    location.addEventListener("click", (e) => {
        let targetClass = e.target.className;
        if (targetClass.search("page-closer") !== -1){
            let bridges = dom.getElementsByClassName(targetClass.split(' ').find(element => element.match(/page\d+/)));
            for (const bridge of bridges){
                bridge.classList.remove("-visible");
            }
            dom.body.style.overflow = "auto";
        }
    });
});
dom.querySelectorAll(".page").forEach(location => {
    location.addEventListener("click", (e) => {
        let targetClass = e.target.className;
        if (targetClass.search("page") !== -1){
            let bridges = dom.getElementsByClassName(targetClass.split(' ').find(element => element.match(/page\d+/)));
            for (const bridge of bridges){
                bridge.classList.remove("-visible");
            }
            dom.body.style.overflow = "auto";
        }
    });
});
dom.addEventListener("keydown", (e) => {
    if (e.key === "Escape"){
        let bridges = dom.getElementsByClassName("page");
        for (const bridge of bridges){
            bridge.classList.remove("-visible");
        }
        dom.body.style.overflow = "auto";
    }
});
document.addEventListener("backbutton", () => {
    let bridges = dom.getElementsByClassName("page");
        for (const bridge of bridges){
            bridge.classList.remove("-visible");
        }
        dom.body.style.overflow = "auto";
});
/////////Show Menu//////////
function slideMenu(menu, b){
    if (b === 1){ menu.classList.add("-slided"); }
    else if(b === 2){ menu.classList.remove("-slided"); }
    else{ menu.classList.toggle("-slided"); }
}
dom.querySelector(".side-menu__trigger").addEventListener("mouseover", () => {
    if (!dom.querySelector(".-visible")){
        slideMenu(menu, 1);
    }
});
dom.querySelector(".menu-button").addEventListener("click", () => {
    if (!dom.querySelector(".-visible")){
        slideMenu(menu, 3);
    }
});
window.addEventListener('mouseover', (e) => {
    if (!menu.contains(e.target) && e.target.className !== "side-menu__trigger" && e.target.className !== "menu-button") {
        slideMenu(menu, 2);
    }
});