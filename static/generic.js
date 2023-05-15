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
                dom.body.style.overflow = "hidden";
            }
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
                dom.body.style.overflow = "auto";
            }
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
                dom.body.style.overflow = "auto";
            }
        }
    });
});
dom.addEventListener("keydown", (e) => {
    if (e.key === "Escape"){
        let bridges = dom.getElementsByClassName("page");
        for (const bridge of bridges){
            bridge.classList.remove("-visible");
            dom.body.style.overflow = "auto";
        }
    }
});
document.addEventListener("backbutton", () => {
    let bridges = dom.getElementsByClassName("page");
        for (const bridge of bridges){
            bridge.classList.remove("-visible");
            dom.body.style.overflow = "auto";
        }
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
let b = dom.querySelector(".side-menu__container a:nth-child(2)");
let i = dom.createElement("i");
i.className = "cars-amount";
b.appendChild(i);
if (sessionStorage.getItem("chosencars") === null){
    i.innerHTML.display = "none";
}
else{
    
    i.innerHTML = sessionStorage.getItem("chosencars").split(";").length-1;
}

/////////Login/////////
function validate(){
    const f = dom.forms.reg;
    if (f.ps.value !== f.psr.value){
        let ermsg = dom.createElement("div");
        ermsg.className = "error-message";
        ermsg.innerHTML = "Несовпадающие пароли";
        dom.querySelector(".content__container").appendChild(ermsg);
        setTimeout(()=>{
            dom.querySelector(".content__container").removeChild(ermsg);
        }, 5000)
    }
    else if (!f.passport.value.match(/\d{6} \d{4}/)){
        let ermsg = dom.createElement("div");
        ermsg.className = "error-message";
        ermsg.innerHTML = "Неправильный формат паспорта";
        dom.querySelector(".content__container").appendChild(ermsg);
    }
    else{
        let result = "";
        for (item of f){
            result = result.concat(item.value).concat(";");
        }
        sessionStorage.setItem("acData", result);
        sessionStorage.setItem("activeData", result);
        location.href = "index.html";
    }
}
function lvalidate(){
    const f = dom.forms.login;
    let data = sessionStorage.getItem("acData");
    let phone = data.split(";")[4];
    let ps = data.split(";")[6];
    if (f.phone.value !== phone || f.ps.value !== ps){
        let ermsg = dom.createElement("div");
        ermsg.className = "error-message";
        ermsg.innerHTML = "Неправильный пароль или телефон";
        dom.querySelector(".content__container").appendChild(ermsg);
    }
    else{
        sessionStorage.setItem("activeData", sessionStorage.getItem("acData"));
        location.href = "index.html";
    }
}
function onlogout(){
    sessionStorage.setItem("activeData", "");
    location.href = "index.html";
}
let nname = null;
if (sessionStorage.getItem("activeData") != null && sessionStorage.getItem("activeData") != ""){
    nname = sessionStorage.getItem("activeData").split(";")[1];
    dom.querySelector(".account a").innerHTML = nname;
}