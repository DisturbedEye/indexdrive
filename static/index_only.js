if (!sessionStorage.getItem("session_start")){
    header = dom.querySelector("header");
    banner_text = dom.querySelector(".banner__container");

    sessionStorage.setItem("session_start", "1");
    headerstyle = header.style;
    bannertextstyle = banner_text.style;
    headerstyle.top = "-10vh";
    headerstyle.animation = "1s slideintop alternate";
    headerstyle.animationDelay = "1s";
    bannertextstyle.visibility = "hidden";
    bannertextstyle.animation = "1s textslide alternate";
    bannertextstyle.animationDelay = "1s";

    setTimeout(() => {
        headerstyle.top = "0";
        bannertextstyle.visibility = "visible";
    }, 1000);
};
