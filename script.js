/* Function for hamburger menu */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener
    ("click",() => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))
/*-------------------------------------------------*/
/*Function for zodiac information */

function signo() {
    let dia, mes;
    dia = parseInt(document.zodform.dia.value);
    mes = parseInt(document.zodform.mes.value);

    var image = document.getElementById("zodImages"); 
    if ((dia>=21&&mes==3)||(dia<=20&&mes==4)) {
        document.getElementById("zodImages").src="/bsigns/aries.jpg";
    }
    if ((dia>=24&&mes==9)||(dia<=23&&mes==10))
        document.getElementById("zodImages").src="/bsigns/libra.jpg"
    
    if ((dia>=21&&mes==4)||(dia<=21&&mes==5))
        document.getElementById("zodImages").src="/bsigns/taurus.jpg"
    
    if ((dia>=24&&mes==10)||(dia<=22&&mes==11))
        document.getElementById("zodImages").src="/bsigns/scorpio.jpg"
    
    if ((dia>=22&&mes==5)||(dia<=21&&mes==6))
        document.getElementById("zodImages").src="/bsigns/gemini.jpg"

    if ((dia>=23&&mes==11)||(dia<=21&&mes==12))
        document.getElementById("zodImages").src="/bsigns/sagittarius.jpg"

    if ((dia>=21&&mes==6)||(dia<=23&&mes==7))
        document.getElementById("zodImages").src="/bsigns/cancer.jpg"

    if ((dia>=22&&mes==12)||(dia<=20&&mes==1))
        document.getElementById("zodImages").src="/bsigns/capricorn.jpg"

    if ((dia>=24&&mes==7)||(dia<=23&&mes==8))
        document.getElementById("zodImages").src="/bsigns/leo.jpg"

    if ((dia>=21&&mes==1)||(dia<=19&&mes==2))
        document.getElementById("zodImages").src="/bsigns/aquarius.jpg"

    if ((dia>=24&&mes==8)||(dia<=23&&mes==9))
        document.getElementById("zodImages").src="/bsigns/virgo.jpg"

    if ((dia>=20&&mes==2)||(dia<=20&&mes==3))
        document.getElementById("zodImages").src="/bsigns/pisces.jpg"

}