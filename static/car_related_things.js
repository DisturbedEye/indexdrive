dom.querySelectorAll(".carchoice").forEach( (loc) => {
    loc.addEventListener("click", (e) => {
        let targetClass = e.target.className;
        let id = targetClass.match(/c\d+/); // берет id машины
        console.log(targetClass)
        id = id[0].toString();
        if (sessionStorage.getItem("chosencars") !== null){
            sessionStorage.setItem("chosencars", sessionStorage.getItem("chosencars").concat(id).concat(";"));
        }
        else{
            sessionStorage.setItem("chosencars", id.concat(";"));
        }
        console.log(sessionStorage.getItem("chosencars"));
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
        "image": "car1.png"
    },
    {
        "name": "Toyota RAV4, 2018",
        "mark": "Toyota",
        "model": "RAV4, 2018",
        "color": "Синий",
        "engine": "u-Дизель Бензин",
        "transmission": "МКП u-АКП u-РКП",
        "price": 8200,
        "image": "car2.png"
    },
    {
        "name": "Ferrari F12berlinetta, 2014",
        "mark": "Ferrari",
        "model": "F12berlinetta, 2014",
        "color": "Красный",
        "engine": "u-Дизель Бензин",
        "transmission": "u-МКП u-АКП РКП",
        "price": 56000,
        "image": "car3.png"
    },
    {
        "name": "Volkswagen Polo, 2016",
        "mark": "Volkswagen",
        "model": "Polo, 2016",
        "color": "Красный",
        "engine": "u-Дизель Бензин",
        "transmission": "МКП АКП РКП",
        "price": 3600,
        "image": "car4.png"
    },
    {
        "name": "Hyundai Creta, 2020",
        "mark": "Hyundai",
        "model": "Creta, 2020",
        "color": "Оранжевый",
        "engine": "u-Дизель Бензин",
        "transmission": "МКП АКП u-РКП",
        "price": 4650,
        "image": "car5.png"
    },
    {
        "name": "Mercedes-Benz C216, 2011",
        "mark": "Mercedes-Benz",
        "model": "C216, 2011",
        "color": "Белый",
        "engine": "u-Дизель Бензин",
        "transmission": "МКП u-АКП РКП",
        "price": 12000,
        "image": "car6.png"
    },
    {
        "name": "Jaguar F-Type Coupe, 2015",
        "mark": "Jaguar",
        "model": "F-Type, 2015",
        "color": "Белый",
        "engine": "u-Дизель Бензин",
        "transmission": "МКП АКП u-РКП",
        "price": 12500,
        "image": "car7.png"
    },
    {
        "name": "Honda NSX, 2021",
        "mark": "Honda",
        "model": "NSX, 2021",
        "color": "Черный",
        "engine": "u-Дизель Бензин",
        "transmission": "u-МКП u-АКП РКП",
        "price": 34000,
        "image": "car8.png"
    },
    {
        "name": "Mercedes-Benz GLK-Class, 2012",
        "mark": "Mercedes-Benz",
        "model": "GLK-Class, 2012",
        "color": "Белый",
        "engine": "u-Дизель Бензин",
        "transmission": "u-МКП АКП u-РКП",
        "price": 5800,
        "image": "car9.png"
    },
    {
        "name": "Audi A4 B9, 2016",
        "mark": "Audi",
        "model": "A4 B9, 2016",
        "color": "Желтый",
        "engine": "u-Дизель Бензин",
        "transmission": "МКП АКП u-РКП",
        "price": 5700,
        "image": "car10.png"
    },
    {
        "name": "Audi A6, 2013",
        "mark": "Audi",
        "model": "A6, 2013",
        "color": "Серебристый",
        "engine": "u-Дизель Бензин",
        "transmission": "МКП АКП РКП",
        "price": 3900,
        "image": "car11.png"
    },
    {
        "name": "Buick Avista, 2018",
        "mark": "Buick",
        "model": "Avista, 2018",
        "color": "Синий",
        "engine": "u-Дизель Бензин",
        "transmission": "u-МКП АКП u-РКП",
        "price": 4700,
        "image": "car12.png"
    }
];
const k = 324;
function make(item){
    if (item.className.match(/car\d+/)){
        let m = item.className.match(/car\d+/).toString(); // берет определенную машину
        let i = m.match(/\d+/)[0]; // берет id машины
        let o = dom.getElementsByClassName(m); // берет элементы соответствующие машине
        for (tag of o){
            let t = tag.className.match(/car-(name|mark|model|color|engine|transmission|price|image)/)[1]; // берет элемент информации о машин            
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
for (item of dom.getElementsByClassName("cars")){ // берет всю инфу о машинах
    make(item);
}
const container = dom.getElementsByClassName("bk-list__container")[0];
if (container !== undefined){
    let total_price = 0;
    if (sessionStorage.getItem("chosencars")){
        let q = 1;
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
            for (v of ["image", "name", "price"]){
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
            total_price += carsList[index-1]["price"];
            tp = dom.getElementById("total-price");
            tp.innerHTML = total_price;
        }
    }
    else{
        let no = dom.createElement("a");
        no.className = "no-items";
        no.innerHTML = "У вас нет выбранных автомобилей.";
        no.href = "car-select.html";
        container.appendChild(no);
        dom.getElementsByClassName("bk-receipt")[0].style.display = "none";
    }
}
