const dom = document;
/////////Show Page//////////
dom.querySelectorAll(".page-opener").forEach(location => {
    location.addEventListener("click", (event) => {
        let targetClass = event.target.className;
        if (targetClass.search("page-opener") !== -1){
            let bridges = dom.getElementsByClassName(targetClass.split(' ').find(element => element.match(/page\d+/)));
            for (const bridge of bridges){
                bridge.classList.add("-visible");
            };
        };
    });
});
dom.querySelectorAll(".page-closer").forEach(location => {
    location.addEventListener("click", (event) => {
        let targetClass = event.target.className;
        if (targetClass.search("page-closer") !== -1){
            let bridges = dom.getElementsByClassName(targetClass.split(' ').find(element => element.match(/page\d+/)));
            for (const bridge of bridges){
                bridge.classList.remove("-visible");
            };
        };
    });
});
/////////Show Menu//////////
dom.querySelector(".side-menu__trigger").addEventListener("mouseover", (element)=>{
    const menu = dom.querySelector(".side-menu");
    let menustyle = menu.style;

    menustyle.animation = "0.2s slideinright alternate";
    menu.classList.add("-slided")
});
dom.querySelector(".menu-button").addEventListener("click", (element)=>{

});