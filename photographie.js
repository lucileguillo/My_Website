gsap.registerPlugin(ScrollTrigger)

document.addEventListener("DOMContentLoaded", function () {     
    const parallax = [
        {class: "parallax-film-first", endTranslateY: -2000, rotate: 5},
        {class: "parallax-film-second", endTranslateY: -1000, rotate: 5},
        {class: "parallax-film-img3", endTranslateY: -5000, rotate: 5},
        {class: "parallax-film-img4", endTranslateY: -7000, rotate: 5},
        {class: "parallax-film-img5", endTranslateY: -1000, rotate: 5},
        {class: "parallax-film-img6", endTranslateY: -2000, rotate: 5},
    ];
    
    ScrollTrigger.create({
        trigger: ".parallax-film-first",
        start: "top +=100vh",
        end: "+=700vh",
        scrub: 1,
        onUpdate: (self) => {
            gsap.to(".parallax-film-first", {
                y: `${-50 * self.progress}vh`, 
                duration: 1,
                ease: "power3.out",
            })
        }
    })

    ScrollTrigger.create({
        trigger: ".parallax-film-second",
        start: "top +=400vh",
        end: "+=800vh",
        scrub: 1,
        onUpdate: (self) => {
            gsap.to(".parallax-film-second", {
                y: `${-50 * self.progress}vh`, 
                duration: 1,
                ease: "power3.out",
            })
        }
    })

    // parallax.forEach(parallax => {
    //     ScrollTrigger.create({
    //         trigger: parallax.class,
    //         start: "top top",
    //         end: "+=1200vh",
    //         scrub: 1,
    //         onUpdate: (self) =>{
    //             gsap.to(parallax.class, {
    //                 y: `${parallax.endTranslateY * self.progress}px`, 
    //                 rotate: `${parallax.rotate * self.progress * 2}`,
    //                 duration: 0.5,
    //                 ease: "power3.out",
    //             })
    //         }
    //     })
        
    // });
});