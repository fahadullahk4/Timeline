var open = document.querySelector(".nav i")
var close = document.querySelector(".full-menu i")
var tl = gsap.timeline();
tl.to(".full-menu", {
	right: 0,
    duration: 0.5,
});

tl.from(".full-menu h4", {
    x: 100,
    opacity: 0,
    stagger: 0.2,
    duration: 0.5,
})

tl.from(".full-menu i", {
    opacity:0,
    scale: 0.5,
    duration: 0.2,
})

tl.pause()

open.addEventListener("click", () => {
	tl.play()
})

close.addEventListener("click", () => {
	tl.reverse()
})