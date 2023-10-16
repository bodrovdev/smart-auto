// ? --- Плавный скроллинг
import Lenis from '@studio-freight/lenis'
function scrollFunc() {
  window.addEventListener('load', () => {
    if (window.innerWidth >= 1280) {
      const lenis = new Lenis()

      lenis.on('scroll', (e) => {
        console.log(e)
      })

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }
  })
}

export { scrollFunc };