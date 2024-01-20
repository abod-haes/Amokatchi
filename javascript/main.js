let mult=document.querySelector(".three")
mult.addEventListener("click", ()=> {
    mult.classList.toggle("change");
})

document.querySelector ("header .three").addEventListener ("click" , () => {
    document.querySelector (".toggle").classList.toggle("open");
})

let up = document.querySelector(".up");
up.onclick=function(){
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
}

