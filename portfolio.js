
// Elementos botones
const ProyectosBtn = document.querySelector('.ProyectoBtn')
const BioBtn = document.querySelector('.BioBtn')
const TecnoBtn = document.querySelector('.TecnoBtn');
const ContactBtn = document.querySelector('.ContactBtn');
const Logobtn=  document.querySelector('.Logobtn');

// Elementos de Info
const Encabezado = document.querySelector('.Encabezado')
const Resumen = document.querySelector('.Resumen')
const Proyectos = document.querySelector('.Proyectos')
const Tecnologias = document.querySelector('.Tecnologias')
const Cuerpo = document.querySelector('Body')


Logobtn.addEventListener('click', () => {
    console.log('El usuario hizo click en el boton!')

    Encabezado.style.display="block";
    Resumen.style.display="block";
    Proyectos.style.display="block";
    Tecnologias.style.display="block";

    ScrollReveal().reveal(Encabezado,  { delay: 350 })
    ScrollReveal().reveal(Resumen,  { delay: 350 })
    ScrollReveal().reveal(Proyectos,  { delay: 350 })
    ScrollReveal().reveal(Tecnologias,  { delay: 350 })
});

ProyectosBtn.addEventListener('click', () => {
    console.log('Click a btn Proyectos')

    Proyectos.style.display="block";
    // ScrollReveal().reveal(Proyectos, {delay: 300})

    Resumen.style.display = "none";
    Encabezado.style.display = "none";
    Tecnologias.style.display= "none";
})

BioBtn.addEventListener('click', ()=>{
    Encabezado.style.display= "block";
    Resumen.style.display="block";

    Proyectos.style.display="none";
    Tecnologias.style.display="none";
})

TecnoBtn.addEventListener('click', () => {
    // console.log('Click a btn Proyectos')

    Tecnologias.style.display= "block";

    Resumen.style.display = "none";
    Encabezado.style.display = "none";
    Proyectos.style.display="none";
})


// ScrollReveal().reveal(Encabezado,  { delay: 200 });
// ScrollReveal().reveal(Resumen , { delay: 400 });
// ScrollReveal().reveal(Proyectos,  { delay: 600 });
