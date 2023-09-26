import { gsap } from "gsap";

window.addEventListener("load", () => {
  if (document.querySelector("#heading_variants") === null) {
    return;
  }
  else {
    let heading_anim = gsap.timeline({ repeat: -1 });
    heading_anim.add(gsap.to("#heading_variants", { y: -64, duration: 1, ease: "power3.out", delay: 0.5, }));
    heading_anim.add(gsap.to("#heading_variants", { y: -128, duration: 1, ease: "power3.out" }));
    heading_anim.add(gsap.to("#heading_variants", { y: -192, duration: 1, ease: "power3.out" }));
    heading_anim.add(gsap.to("#heading_variants", { y: -256, duration: 1, ease: "power3.out" }));
    heading_anim.add(gsap.to("#heading_variants", { y: 0, duration: 2, ease: "power3.out", delay: 0.5, }));
  }
});

