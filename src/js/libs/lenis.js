// import Lenis from '@studio-freight/lenis';

// ? --- Плавный скроллинг (не работает вместе с модалками)
// window.addEventListener('load', () => {
//   if (window.innerWidth >= 1280) {
//     const lenis = new Lenis()

//     lenis.on('scroll', (e) => {
//       console.log(e)
//     })

//     function raf(time) {
//       lenis.raf(time)
//       requestAnimationFrame(raf)
//     }

//     requestAnimationFrame(raf)
//   }
// })