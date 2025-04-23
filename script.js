// ------- Osmo [https://osmo.supply/] ------- //

document.addEventListener("DOMContentLoaded", () => {
    // Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger);
    
    // Parallax Layers
    document.querySelectorAll('[data-parallax-layers]').forEach((triggerElement) => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement,
                start: "0% 0%",
                end: "100% 0%",
                scrub: 0
            }
        });
        
        const layers = [
            { layer: "1", yPercent: 30 },
            { layer: "2", yPercent: 45 },
            { layer: "3", yPercent: 60 },
            { layer: "4", yPercent: 80 }
        ];
        
        layers.forEach((layerObj, idx) => {
            tl.to(
                triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
                {
                    yPercent: layerObj.yPercent,
                    ease: "none"
                },
                idx === 0 ? undefined : "<"
            );
        });
    });

    // Animación del título de la historia
    const tituloHistoria = document.querySelector('.historia__titulo');
    gsap.to(tituloHistoria, {
        scrollTrigger: {
            trigger: tituloHistoria,
            start: "top 80%",
            toggleClass: "visible"
        }
    });

    // Animación de los párrafos
    const parrafos = document.querySelectorAll('.historia__parrafo');
    parrafos.forEach((parrafo, index) => {
        gsap.to(parrafo, {
            scrollTrigger: {
                trigger: parrafo,
                start: "top 80%",
                toggleClass: "visible"
            }
        });
    });

    // Animación de las secciones de la historia
    const secciones = document.querySelectorAll('.historia__seccion');
    secciones.forEach((seccion) => {
        gsap.to(seccion, {
            scrollTrigger: {
                trigger: seccion,
                start: "top 80%",
                toggleClass: "visible"
            }
        });
    });
});

/* Lenis */
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// Configurar GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Seleccionar elementos
const parallaxLayers = document.querySelectorAll('[data-parallax-layer]');
const parallaxContainer = document.querySelector('.parallax');

// Crear efecto parallax para cada capa
parallaxLayers.forEach(layer => {
    const layerNumber = layer.getAttribute('data-parallax-layer');
    const speed = 1 - (layerNumber * 0.2); // Ajustar velocidad según la capa

    gsap.to(layer, {
        y: `${speed * 100}%`,
        ease: 'none',
        scrollTrigger: {
            trigger: parallaxContainer,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true
        }
    });
});

// Añadir efecto de desvanecimiento
const fadeElement = document.querySelector('.parallax__fade');
gsap.to(fadeElement, {
    opacity: 0,
    scrollTrigger: {
        trigger: parallaxContainer,
        start: 'top top',
        end: 'bottom top',
        scrub: true
    }
}); 