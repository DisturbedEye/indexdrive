const dom = document;
const menu = dom.querySelector(".side-menu");
/////////Car related things/////////
async function changePrice(element, price, days){
    const e = element;
    let p = price;
    if (days <= 3){ p *= days; }
    else if (days > 3 && days <= 6){ p *= days-(days*0.05); }
    else if (days > 6 && days <= 9){ p *= days-(days*0.1); }
    else if (days > 9 && days <= 12){ p *= days-(days*0.15); }
    else if (days > 12 && days <= 15){ p *= days-(days*0.2); }
    else if (days > 18){ p *= days-(days*0.25); }
    e.innerHTML = p.toString().concat("₽");
}
async function changeCarsAmount(){
    let b = dom.querySelectorAll(".cars-amount");
    for (bs of b){
        bs.innerHTML = sessionStorage.getItem("chosencars").split(";").length-1;
    }
    setTimeout(() => {
        changeCarsAmount();
    }, 1500);
}
function generateTag(n){
    if (!sessionStorage.getItem("carTag".concat(n))){
        let res = "";
        const pool1 = "АВЕКМНОРСТУХ";
        const pool2 = "0123456789";
        res += pool1[Math.round(Math.random()*11)];
        res += pool2[Math.round(Math.random()*9)];
        res += pool2[Math.round(Math.random()*9)];
        res += pool2[Math.round(Math.random()*9)];
        res += pool1[Math.round(Math.random()*11)];
        res += pool1[Math.round(Math.random()*11)];
        sessionStorage.setItem("carTag".concat(n), res);
        return res;
    }
    else{
        return sessionStorage.getItem("carTag".concat(n))
    }
}
function make(item){
    if (item.className.match(/car\d+/)){
        let m = item.className.match(/car\d+/).toString(); // берет определенную машину
        let i = m.match(/\d+/)[0]; // берет id машины
        let o = dom.getElementsByClassName(m); // берет элементы соответствующие машине
        for (tag of o){
            let t = tag.className.match(/car-(name|mark|model|color|engine|transmission|price|image|tag)/)[1]; // берет элемент информации о машин            
            if (t == "image"){
                tag.src = "media/images/cars/sell/".concat(carsList[i-1][t]);
            }
            else if (t == "transmission" || t == "engine"){
                let y = carsList[i-1][t].split(" ");
                for (ina of y){
                    let w = ina.match(/(u-)(Дизель|Бензин|МКП|АКП|РКП)/);
                    let a = dom.createElement("i");
                    if (w !== undefined && w !== null){
                        w = w[0];
                        a.className = "disabled-text";
                        a.innerHTML = w.match(/(Дизель|Бензин|МКП|АКП|РКП)/)[0];
                        dom.querySelector(".car-".concat(t).concat(".").concat(m)).appendChild(a);
                    }
                    else{
                        a.innerHTML = ina;
                        dom.querySelector(".car-".concat(t).concat(".").concat(m)).appendChild(a);
                    }
                }
            }
            else if (t == "price"){
                tag.innerHTML = carsList[i-1][t].toString().concat("₽");
            }
            else{
                tag.innerHTML = carsList[i-1][t];
            }
        }
    }
}
dom.querySelectorAll(".carchoice").forEach( (loc) => {
    loc.addEventListener("click", (e) => {
        let targetClass = e.target.className;
        let id = targetClass.match(/c\d+/); // берет id машины
        id = id[0].toString();
        if (sessionStorage.getItem("chosencars") !== null){
            if (!sessionStorage.getItem("chosencars").includes(id)){
                sessionStorage.setItem("chosencars", sessionStorage.getItem("chosencars").concat(id).concat(";"));
            }
        }
        else{
            sessionStorage.setItem("chosencars", id.concat(";"));
        }
        changeCarsAmount();
    });
});
const carsList = [
    {
        "name": "Nissan Sentra, 2017",
        "mark": "Nissan",
        "model": "Sentra, 2017",
        "color": "Черный",
        "engine": "u-Дизель Бензин",
        "transmission": "МКП u-АКП u-РКП",
        "price": 4000,
        "image": "car1.png",
        "tag": generateTag(1)
    },
    {
        "name": "Toyota RAV4, 2018",
        "mark": "Toyota",
        "model": "RAV4, 2018",
        "color": "Синий",
        "engine": "u-Дизель Бензин",
        "transmission": "МКП u-АКП u-РКП",
        "price": 8200,
        "image": "car2.png",
        "tag": generateTag(2)
    },
    {
        "name": "Ferrari F12berlinetta, 2014",
        "mark": "Ferrari",
        "model": "F12berlinetta, 2014",
        "color": "Красный",
        "engine": "u-Дизель Бензин",
        "transmission": "u-МКП u-АКП РКП",
        "price": 56000,
        "image": "car3.png",
        "tag": generateTag(3)
    },
    {
        "name": "Volkswagen Polo, 2016",
        "mark": "Volkswagen",
        "model": "Polo, 2016",
        "color": "Красный",
        "engine": "u-Дизель Бензин",
        "transmission": "МКП АКП РКП",
        "price": 3600,
        "image": "car4.png",
        "tag": generateTag(4)
    },
    {
        "name": "Hyundai Creta, 2020",
        "mark": "Hyundai",
        "model": "Creta, 2020",
        "color": "Оранжевый",
        "engine": "u-Дизель Бензин",
        "transmission": "МКП АКП u-РКП",
        "price": 4650,
        "image": "car5.png",
        "tag": generateTag(5)
    },
    {
        "name": "Mercedes-Benz C216, 2011",
        "mark": "Mercedes-Benz",
        "model": "C216, 2011",
        "color": "Белый",
        "engine": "u-Дизель Бензин",
        "transmission": "МКП u-АКП РКП",
        "price": 12000,
        "image": "car6.png",
        "tag": generateTag(6)
    },
    {
        "name": "Jaguar F-Type Coupe, 2015",
        "mark": "Jaguar",
        "model": "F-Type, 2015",
        "color": "Белый",
        "engine": "u-Дизель Бензин",
        "transmission": "МКП АКП u-РКП",
        "price": 12500,
        "image": "car7.png",
        "tag": generateTag(7)
    },
    {
        "name": "Honda NSX, 2021",
        "mark": "Honda",
        "model": "NSX, 2021",
        "color": "Черный",
        "engine": "u-Дизель Бензин",
        "transmission": "u-МКП u-АКП РКП",
        "price": 34000,
        "image": "car8.png",
        "tag": generateTag(8)
    },
    {
        "name": "Mercedes-Benz GLK-Class, 2012",
        "mark": "Mercedes-Benz",
        "model": "GLK-Class, 2012",
        "color": "Белый",
        "engine": "u-Дизель Бензин",
        "transmission": "u-МКП АКП u-РКП",
        "price": 5800,
        "image": "car9.png",
        "tag": generateTag(9)
    },
    {
        "name": "Audi A4 B9, 2016",
        "mark": "Audi",
        "model": "A4 B9, 2016",
        "color": "Желтый",
        "engine": "u-Дизель Бензин",
        "transmission": "МКП АКП u-РКП",
        "price": 5700,
        "image": "car10.png",
        "tag": generateTag(10)
    },
    {
        "name": "Audi A6, 2013",
        "mark": "Audi",
        "model": "A6, 2013",
        "color": "Серебристый",
        "engine": "u-Дизель Бензин",
        "transmission": "МКП АКП РКП",
        "price": 3900,
        "image": "car11.png",
        "tag": generateTag(11)
    },
    {
        "name": "Buick Avista, 2018",
        "mark": "Buick",
        "model": "Avista, 2018",
        "color": "Синий",
        "engine": "u-Дизель Бензин",
        "transmission": "u-МКП АКП u-РКП",
        "price": 4700,
        "image": "car12.png",
        "tag": generateTag(12)
    }
];
const k = 324;
for (item of dom.getElementsByClassName("cars")){ // берет всю инфу о машинах
    make(item);
}
// creating pages and general info about cars in booking listing
const list = dom.getElementsByClassName("bk-list")[0];
const container = dom.getElementsByClassName("bk-list__container")[0];
if (container !== undefined){
    let total_price = 0;
    if (sessionStorage.getItem("chosencars")){
        let q = 1;
        let prices = [];
        for (item of sessionStorage.getItem("chosencars").split(";")){
            if (item === "") { break }
            if (!item.match(/f[1-5]/)){
                item = item.concat("f1");
            }
            let i = "car".concat(item.match(/\d+/g)[0]); // берет машину
            let index = item.match(/\d+/g)[0]; // берет id машины
            element = dom.createElement("a");
            element.className = "bk-car cars page-opener page".concat(q);
            container.appendChild(element);
            // создание списка
            prices.push(carsList[index-1]["price"]);
            for (v of ["image", "name"]){
                if (v == "image"){
                    item = dom.createElement("img");
                }
                else{
                    item = dom.createElement("div");
                }
                item.className = "car-".concat(v).concat(" ").concat(i).concat(" page-opener page").concat(q);
                element.appendChild(item);
                make(item);
            }
            let p = dom.createElement("div");
            p.className = "car-price ".concat(" page-opener page").concat(q);
            p.innerHTML = prices[q-1].toString().concat("₽");
            element.appendChild(p);
            changePrice(p, prices[q-1], 1);
            // создание страниц
            let page = dom.createElement("section");
            page.className = "page page".concat(q);
            let page__container = dom.createElement("div");
            page__container.className = "page__container";
            let closer = dom.createElement("i");
            closer.className = "fas fa-window-close page-closer page".concat(q);
            let h = dom.createElement("h2");
            page.appendChild(page__container);
            page__container.appendChild(closer);
            page__container.appendChild(h);
            h.innerHTML = carsList[index-1]["name"];
            let bkcontainer = dom.createElement("div");
            bkcontainer.className = "bk-page-content";
            let bkimage = dom.createElement("img");
            bkimage.src = "media/images/cars/sell/".concat(carsList[index-1]["image"]);
            bkimage.className = "bk-page-image";
            bkcontainer.appendChild(bkimage);
            let bkparameters = dom.createElement("div");
            bkparameters.className = "bk-page-parameters";
            bkcontainer.appendChild(bkparameters);
            page__container.appendChild(bkcontainer);
            dom.getElementsByTagName("body")[0].appendChild(page);
            for (t = 0; t < 14*2; t++){
                let bkelement = null
                if (t % 2 != 0 && t <= 8){
                    bkelement = dom.createElement("div");
                }
                else if (t == 11){
                    bkelement = dom.createElement("div");
                }
                else if (t % 2 != 0 && t > 8){
                    bkelement = dom.createElement("input");
                    bkelement.type = "text";
                }
                else if (t % 2 == 0){
                    bkelement = dom.createElement("div");
                }
                bkparameters.appendChild(bkelement);
                switch (t){
                    // inputs and generated text
                    case 1:{
                        bkelement.className = "bk-parameters-text";
                        bkelement.innerHTML = q;
                        break;
                    }
                    case 3:{
                        bkelement.className = "bk-parameters-text car-mark ".concat(i);
                        make(bkelement);
                        break;
                    }
                    case 5:{
                        bkelement.className = "bk-parameters-text car-model ".concat(i);
                        make(bkelement);
                        break;
                    }
                    case 7:{
                        bkelement.className = "bk-parameters-text car-tag ".concat(i);
                        make(bkelement);
                        break;
                    }
                    case 9:{
                        bkelement.className = "generic-input";
                        bkelement.value = 1;
                        setInterval(changePrice(dom.getElementsByClassName("car-price car".concat(index)), prices[q-1], bkelement.value), 1500);
                        break;
                    }
                    case 11:{
                        bkelement.className = "bk-parameters-text car-price ".concat(i);
                        break;
                    }
                    case 13:{
                        bkelement.className = "generic-input";
                        break;
                    }
                    case 15:{
                        bkelement.className = "generic-input";
                        break;
                    }
                    case 17:{
                        bkelement.className = "generic-input";
                        break;
                    }
                    case 19:{
                        bkelement.className = "generic-input";
                        break;
                    }
                    case 21:{
                        bkelement.className = "generic-input";
                        bkelement.type = "tel";
                        break;
                    }
                    case 23:{
                        bkelement.className = "generic-input";
                        break;
                    }
                    case 25:{
                        bkelement.className = "generic-input";
                        break;
                    }
                    case 27:{
                        bkelement.className = "generic-input";
                        bkelement.type = "date";
                        break;
                    }
                    // text
                    case 0:{
                        bkelement.className = "bk-parameters-text";
                        bkelement.innerHTML = "Идентификатор машины: ";
                        break;
                    }
                    case 2:{
                        bkelement.className = "bk-parameters-text";
                        bkelement.innerHTML = "Марка авто: ";
                        break;
                    }
                    case 4:{
                        bkelement.className = "bk-parameters-text";
                        bkelement.innerHTML = "Название авто: ";
                        break;
                    }
                    case 6:{
                        bkelement.className = "bk-parameters-text";
                        bkelement.innerHTML = "Номер машины: ";
                        break;
                    }
                    case 8:{
                        bkelement.className = "bk-parameters-text";
                        bkelement.innerHTML = "Кол-во бронируемых дней: ";
                        break;
                    }
                    case 10:{
                        bkelement.className = "bk-parameters-text";
                        bkelement.innerHTML = "Цена: ";
                        break;
                    }
                    case 12:{
                        bkelement.className = "bk-parameters-text";
                        bkelement.innerHTML = "Филиал: ";
                        break;
                    }
                    case 14:{
                        bkelement.className = "bk-parameters-text";
                        bkelement.innerHTML = "Фамилия: ";
                        break;
                    }
                    case 16:{
                        bkelement.className = "bk-parameters-text";
                        bkelement.innerHTML = "Имя: ";
                        break;
                    }
                    case 18:{
                        bkelement.className = "bk-parameters-text";
                        bkelement.innerHTML = "Отчество: ";
                        break;
                    }
                    case 20:{
                        bkelement.className = "bk-parameters-text";
                        bkelement.innerHTML = "Номер телефона: ";
                        break;
                    }
                    case 22:{
                        bkelement.className = "bk-parameters-text";
                        bkelement.innerHTML = "Паспортные данные: ";
                        break;
                    }
                    case 24:{
                        bkelement.className = "bk-parameters-text";
                        bkelement.innerHTML = "Банковская карта: ";
                        break;
                    }
                    case 26:{
                        bkelement.className = "bk-parameters-text";
                        bkelement.innerHTML = "Дата рождения: ";
                        break;
                    }
                }
            }
            // чек
            total_price += carsList[index-1]["price"];
            tp = dom.getElementById("total-price");
            tp.innerHTML = total_price.toString().concat("₽");
            q++;
        }
        dom.getElementById("submit").addEventListener("click", () => {
            sessionStorage.setItem("chosencars", "");
            location.href = "index.html";
        });
    }
    else{
        let no = dom.createElement("a");
        no.className = "no-items";
        no.innerHTML = "У вас нет выбранных автомобилей.";
        no.href = "car-select.html";
        list.appendChild(no);
        dom.getElementsByClassName("bk-receipt")[0].style.display = "none";
    }
}
let b = dom.querySelectorAll(".bro");
let i = [dom.createElement("i"), dom.createElement("i")];
for (j = 0; j < 2; j++){
    i[j].className = "cars-amount";
    b[j].appendChild(i[j]);
    if (sessionStorage.getItem("chosencars") == null || sessionStorage.getItem("chosencars") == ""){
        i[j].style.display = "none";
        changeCarsAmount();
    }
    else{
        changeCarsAmount();
    }
}
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
    else if (!f.passport.value.match(/\d{4} \d{6}/)){
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