if (sessionStorage.getItem("acData") === null){ location.href = "register.html"; }
else{
    let d = dom.querySelector("#ac-surname");
    d.innerHTML = sessionStorage.getItem("acData").split(";")[0];
    d = dom.querySelector("#ac-name");
    d.innerHTML = sessionStorage.getItem("acData").split(";")[1];
    d = dom.querySelector("#ac-sec-name");
    d.innerHTML = sessionStorage.getItem("acData").split(";")[2];
    d = dom.querySelector("#passport-id");
    d.innerHTML = sessionStorage.getItem("acData").split(";")[3];
    d = dom.querySelector("#ac-phone");
    d.innerHTML = sessionStorage.getItem("acData").split(";")[4];
    d = dom.querySelector("#ac-bd-date");
    d.innerHTML = sessionStorage.getItem("acData").split(";")[5];
}