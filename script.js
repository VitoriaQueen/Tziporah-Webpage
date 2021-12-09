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
        document.getElementById("zodInfo").textContent ="Os arianos são definidos por sua força, impulsividade e impetuosidade. Eles não refletem ou pensam antes de agir e isso fica muito claro em uma pequena discussão com os nativos desse signo. Os arianos “atiram primeiro, perguntam depois”.Além disso, eles são lembrados por sua agressividade e violência, porém, são ousados e não possuem medo de serem pioneiros, agindo sempre a frente dos outros signos. Mão se assuste, essa fera possui um bom coração e tem suas qualidades. São naturalmente conquistadores, charmosos e tem um ótimo senso de humor. Além de serem muito determinados."
    }
    if ((dia>=24&&mes==9)||(dia<=23&&mes==10)) {
        document.getElementById("zodImages").src="/bsigns/libra.jpg"
        document.getElementById("zodInfo").textContent ="O libriano evita conflito o máximo que pode, buscando sempre a imparcialidade quando se mete em um debate. São diplomatas natos, tendo a capacidade de intervir entre dois pontos de vista opostos. Eles possuem uma dificuldade muito grande de conseguir fazer escolhas, carregando uma fama de indecisos por isso. Uma coisa é certa para essa galera, eles são atraídos naturalmente para tudo aquilo que é harmônico. E falando em atração, eles são um dos mais atraentes do zodíaco, pela sua personalidade educada e gentil, e são naturalmente charmosos."
    }
    
    if ((dia>=21&&mes==4)||(dia<=21&&mes==5)) {
        document.getElementById("zodImages").src="/bsigns/taurus.jpg"
        document.getElementById("zodInfo").textContent ="Os taurinos, em síntese, são fortes e muito teimosos e, mais do que isso, eles são muito ciumentos e protetores. E a fama de gulosos? Sim, os taurinos são apreciadores de boa comida e conforto. Todo mundo gosta, mas eles um pouco mais. Não por acaso são muito decididos e persistentes para conseguir o que almejam. Procura lealdade em uma pessoa? Tenha alguém do signo de Touro na sua vida. No entanto, os nativos desse signo precisam de estabilidade para serem felizes. E um defeito desse signo, é a falta de iniciativa dos taurinos, que muitas vezes precisam de um empurrãozinho para engatar.  Entre as principais características desse signo, podemos definir os taurinos como serenos e muito pacientes."
     }
    
    if ((dia>=24&&mes==10)||(dia<=22&&mes==11)) {
        document.getElementById("zodImages").src="/bsigns/scorpio.jpg"
        document.getElementById("zodInfo").textContent ="O escorpião é o signo mais determinado do zodíaco, indo até as última consequências para alcançar aquilo que deseja. Com uma personalidade forte, os nativos desse signo tendem a ser pessoas bastante geniosas e meticulosas. Mas, principalmente teimosas. São do tipo que valorizam muito a sua própria opinião. Além disso, eles são muito sexuais e sedutores. E apesar de ter o dom da conquista, os escorpianos preferem estar com alguém fixo do que com várias pessoas ao mesmo tempo."
     }
    
    if ((dia>=22&&mes==5)||(dia<=21&&mes==6)) {
        document.getElementById("zodImages").src="/bsigns/gemini.jpg"
        document.getElementById("zodInfo").textContent ="Um dos signos mais imprevisíveis do zodíaco, é o de Gêmeos. Com a fama de duas caras, esse signo tende a ser muito volúvel, mudando de opinião com muita felicidade. Então, na prática você nunca sabe o que pode esperar deles. Eles são um pouco pavio curto, porém, gostam de viver grandes aventuras e cultivam um bom humor nato. Além disso, carregam uma fama de preguiçosos e dorminhocos e são. Os geminianos também são muito intelectuais e buscam isso nas pessoas. Como principais características do signo, podemos ressaltar a sua inteligência e o companheirismo."
     }

    if ((dia>=23&&mes==11)||(dia<=21&&mes==12)) {
        document.getElementById("zodImages").src="/bsigns/sagittarius.jpg"
        document.getElementById("zodInfo").textContent ="Os sagitarianos, em suma, são pessoas que estão sempre com um sorriso no rosto, buscando o que a de melhor na vida. Desse modo, são muito engraçados e tendem a arrancar um sorriso de todo mundo que encontrar. Eles são muito sonhadores e estão sempre em busca de conhecer pessoas novas e adoram cultivar amigos. São pessoas disciplinadas e organizadas, muito alegues e aventureiras. Quer embarcar em uma viagem exótica? Convide um sagitariano, que ele será a melhor companhia possível."
     }

    if ((dia>=21&&mes==6)||(dia<=23&&mes==7)) {
        document.getElementById("zodImages").src="/bsigns/cancer.jpg"
        document.getElementById("zodInfo").textContent ="Os mais dramáticos do zodíaco. Não por acaso os cancerianos são muito sensíveis e emotivos, por isso, dão muito valor a intimidade e ao carinho. São caseiros por natureza e tem como epicentro a família. Eles fazem amizade com muita facilidade, porém, eles são bastante instáveis. Além disso, os cancerianos tem uma personalidade muito materna, e estão sempre cuidando de todos ao seu redor."
    }

    if ((dia>=22&&mes==12)||(dia<=20&&mes==1)) {
        document.getElementById("zodImages").src="/bsigns/capricorn.jpg"
        document.getElementById("zodInfo").textContent ="O capricorniano, por outro lado, pode até parecer uma fechado e meio antipático. Mas ele só é tímido. Então, entre as principais características desse signo, podemos dizer que ele é muito trabalhador e determinado. Além disso, sua vida profissional é muito importante para ele. Se decidem por algo, irão persistir até conseguir. Isso é como um mantra para os nativos desse signo. E também são muito responsáveis, leais e confiáveis. Mas, ao mesmo tempo, são bastante controladores e persuasivos. Então, é difícil resistir ao seu charme."
     }

    if ((dia>=24&&mes==7)||(dia<=23&&mes==8)) {
        document.getElementById("zodImages").src="/bsigns/leo.jpg"
        document.getElementById("zodInfo").textContent ="Os leoninos gostam de chamar a atenção mesmo, pois eles vieram para tomar o lugar que é deles “por direito”. São pessoas fortes, que presam a liberdade e são extravagantes por natureza. Mas, apesar de serem muito comunicativos e abertos, eles possuem muita insegurança. Além disso, eles sabem ser amáveis e muito leais. Os leoninos prezam muito por serem exaltados, e a supervalorização de si mesmo é um ponto marcante desse signo."
     }

    if ((dia>=21&&mes==1)||(dia<=19&&mes==2)) {
        document.getElementById("zodImages").src="/bsigns/aquarius.jpg"
        document.getElementById("zodInfo").textContent ="O aquariano é um ser independente, que preza muito por sua liberdade. Aliás, a busca por liberdade é sua principal característica, juntamente com a rebeldia. São muito inteligentes e idealistas. Também apreciam arte e cultura, sendo pessoas muito criativas e desapegadas. No entanto, possuem uma personalidade forte que não é para qualquer um. Mas com certeza valerá a pena ter um aquariano na sua vida. Isso porque eles são muito leais. Estão sempre em busca de novidades, gostam de descobrir coisas novas e aprender sobre coisas peculiares."
    }

    if ((dia>=24&&mes==8)||(dia<=23&&mes==9)) {
        document.getElementById("zodImages").src="/bsigns/virgo.jpg"
        document.getElementById("zodInfo").textContent ="Virgem é sinônimo de organização e padrões, o que é bom mas pode incomodar um pouco o restante do zodíaco. O virginiano é um signo que nasceu para o sucesso, e ele fará de tudo para conquistar tudo aquilo que deseja, custe o que custar. Eles costumam ser rígidos com eles mesmos e com quem está a sua volta, cobrando muito, até mesmo por serem extremamente perfeccionistas. Mas não se engane, eles são muito tímidos."
    }

    if ((dia>=20&&mes==2)||(dia<=20&&mes==3)) {
        document.getElementById("zodImages").src="/bsigns/pisces.jpg"
        document.getElementById("zodInfo").textContent ="Peixes é o signo mais adorável do zodíaco. Os piscianos são pessoas encantadoras, charmosas, sonhadoras e gentis. Contudo, um tanto quanto carente. São bondosos e gostam de ajudar, além de serem muito espiritualizados. E juntamente com câncer, é um signo muito romântico e emotivo. Em resumo, pessoas desse signo têm uma espécie de queda por conto de fadas e acredita que todo mundo merece ser feliz."
     }

}