function addRipple(element,rippleGrowMax = "100%", rippleOpacity = "0.3") {
    var e = document.createElement("div")
    e.classList.add("rippleOBJ")
    e.classList.remove("rippleOBJ-a")
    e.style.pointerEvents = "none";
    e.style.setProperty('--ripple-grow',rippleGrowMax);
    e.style.setProperty('--ripple-opacity',rippleOpacity);
    element.addEventListener("mousedown", function (object) {
        let bounds = e.getBoundingClientRect();
        let x = object.clientX - bounds.left;
        let y = object.clientY - bounds.top;
        e.classList.add("rippleOBJ-a")
        e.style.setProperty('--ripple-y',y + 'px');
        e.style.setProperty('--ripple-x',x + 'px');
        e.classList.remove("rippleOBJ-a")
        void e.offsetWidth;
        e.classList.add("rippleOBJ-a")        
    });

    element.appendChild(e)
}