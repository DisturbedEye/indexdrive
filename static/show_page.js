const dom = document;
dom.querySelectorAll("i.page-opener").forEach(location => {
    location.addEventListener("click", (event) => {
        let targetClass = event.target.className;
        if (targetClass.split(' ')[2] === "page-opener"){
            let bridges = dom.getElementsByClassName(targetClass.split(' ')[3]);
            for (const bridge of bridges){
                bridge.classList.add("-visible");
            };
        };
    });
});
dom.querySelectorAll("i.page-closer").forEach(location => {
    location.addEventListener('click', (event) => {
        let targetClass = event.target.className;
        if (targetClass.split(' ')[2] === "page-closer"){
            let bridges = dom.getElementsByClassName(targetClass.split(' ')[3]);
            for (const bridge of bridges){
                bridge.classList.remove("-visible");
            };
        };
    });
});
