function openSideMenu() {
  document.getElementById("hamburgerBtn").classList.toggle("open");
  document.getElementById("primaryNav").classList.toggle("open1");
}

gsap.registerPlugin(ScrollTrigger);
let masks = document.querySelectorAll(".mask");

masks.forEach((mask) => {
  let image = mask.querySelector(".mask img");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: mask,
      start: "top center",
      toggleActions: "restart reverse restart reverse",
    },
  });

  tl.set(mask, { autoAlpha: 1 });
  tl.from(mask, 1.5, {
    xPercent: -100,
    ease: Power2.out,
  });
  tl.from(image, 1.5, {
    xPercent: 100,
    scale: 1.3,
    delay: -1.5,
    ease: Power2.out,
  });
  tl.fromTo(
    ".anim2",
    { clipPath: "circle(5% at 77%40%)", scale: 0.5 },
    {
      clipPath: "circle(75% at 50%50%)",
      ease: "none",
      scale: 1,
      delay: 1.2,
      scrollTrigger: {
        trigger: ".anim2",
        scrub: .5,
        start: "top center",
        end: "top center-=200",
        toggleActions: "restart none restart reset",
      },
    }
  );
  tl.fromTo(
    ".anim3",
    { clipPath: "circle(5% at 77%40%)", scale: 0.5 },
    {
      clipPath: "circle(75% at 50%50%)",
      ease: "none",
      scale: 1,
      delay: 1.2,
      scrollTrigger: {
        trigger: ".anim3",
        scrub: 1,
        start: "top bottom",
        end: "top center-=200",
        toggleActions: "restart none restart reset",
      },
    }
  );
});
let tll = gsap.timeline({ default: { duration: 1 } });

tll.from(".text1", {
  y: -50,
  opacity: 0,
  stagger: 0.3,
  ease: "back(3)",
  delay: .5,
});

let tex = document.querySelectorAll(".text2");

tex.forEach((text2) => {
  let tl2 = gsap.timeline({scrollTrigger: {
    trigger: text2,
    start: "top bottom",
    end:"top center",
    toggleActions: "restart"
  }});
  tl2.set(text2, { autoAlpha: 1 });
  tl2.from(text2, {
    y: -50,
  opacity: 0,
  stagger: 0.9,
  ease: "power-4",
  });
});
gsap.from(".text3", {
  x: -100,
  opacity: 0,
  stagger: 0.5,
  ease: "back(3)",
  duration:1,
  scrollTrigger:{
    trigger:".text3",
    toggleActions:"restart pause reverse restart"
  }
});

let animation = gsap.timeline({ default: {duration:1}});

animation.from(".create", {
  y:-50,
  opacity:0,
  stagger:0.4,
  ease:"back(5)",
  delay:.2,
  scrollTrigger:{
    trigger:".create",
    toggleActions:"restart pause restart restart"
  }
});
document.getElementById("create").onclick =()=> animation.restart();