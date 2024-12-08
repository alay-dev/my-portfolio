gsap.registerPlugin(ScrollTrigger);

const cursor = document.getElementById("cursor");
const cursorWrapper = document.getElementById("cursor-wrapper");

window.addEventListener("mousemove", (e) => {
  const cursorWrapperWidth = cursorWrapper.getBoundingClientRect().width;
  cursorWrapper.style.transform = `translate(${
    e.clientX - cursorWrapperWidth / 2
  }px, ${e.clientY - cursorWrapperWidth / 2}px)`;
  cursor.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px) `;
});

window.scrollTo(0, 0);

// hero section

const tl = gsap.timeline();
tl?.from("#hello-text", {
  opacity: 0,
  duration: 2,
  delay: 1,
  display: "flex",
});

tl?.from("#i-am-text", {
  opacity: 0,
  duration: 1,
  display: "flex",
});

tl?.from("#alay-text", {
  opacity: 0,
  display: "flex",
  duration: 3,
});

tl?.from("#alay-name", {
  opacity: 0,
  x: -100,
});

tl?.from("#tagline-1", {
  opacity: 0,
  duration: 0.5,
  stagger: 0.2,
  y: 20,
});

tl?.from("#tagline-2", {
  opacity: 0,
  duration: 0.5,
  stagger: 0.2,
  y: 20,
});

tl?.from("#tagline-3", {
  opacity: 0,
  duration: 0.5,
  stagger: 0.2,
  y: 20,
});

tl?.from("#scroll-gif", {
  opacity: 0,
});

tl?.to("#alay-name", {
  opacity: 1,
  bottom: 0,
  delay: 0,
  scale: 1,
  stagger: 0.2,
  ease: Bounce.easeOut,
});

// tl?.to("#alay-name", {
//   opacity: 0,
//   y: 200,

//   scrollTrigger: {
//     trigger: ".tagline-last",
//     start: "top 60%",
//     end: "top 20%",
//     scrub: true,
//     markers: true
//   },
// });

// gsap?.to("#tagline", {
//   opacity: 0,
//   stagger: 0.2,
//   y: -60,

//   scrollTrigger: {
//     trigger: ".tagline-last",
//     start: "top 60%",
//     end: "top 20%",
//     scrub: true,
//     markers: true
//   },
// });

// gsap?.to("#scroll-gif", {
//   opacity: 0,
//   stagger: 0.2,
//   y: -60,
//   scrollTrigger: {
//     trigger: ".tagline-last",
//     start: "top 60%",
//     end: "top 20%",
//     scrub: true,
//     markers: true
//   },
// });

// experince section

const experienceTextEffect = {
  opacity: 0.2,
  filter: "blur(10px)",
  stagger: 0.05,
  y: 50,
  x: 120,
};

gsap?.from("#text-1 span", {
  ...experienceTextEffect,
  scrollTrigger: {
    trigger: "#text-1",
    start: "top 80%",
    end: "top 20%",
    scrub: true,
  },
});

gsap?.from("#text-2 span", {
  ...experienceTextEffect,
  scrollTrigger: {
    trigger: "#text-2",
    start: "top 80%",
    end: "top 20%",
    scrub: true,
  },
});

gsap?.from("#text-3 span", {
  ...experienceTextEffect,
  scrollTrigger: {
    trigger: "#text-3",
    start: "top 80%",
    end: "top 20%",
    scrub: true,
  },
});

gsap?.from("#text-4 span", {
  ...experienceTextEffect,
  scrollTrigger: {
    trigger: "#text-4",
    start: "top 80%",
    end: "top 20%",
    scrub: true,
  },
});

gsap?.from("#text-5 span", {
  ...experienceTextEffect,
  scrollTrigger: {
    trigger: "#text-5",
    start: "top 80%",
    end: "top 20%",
    scrub: true,
  },
});

gsap?.from("#text-6 span", {
  ...experienceTextEffect,
  scrollTrigger: {
    trigger: "#text-6",
    start: "top 80%",
    end: "top 20%",
    scrub: true,
  },
});

gsap?.from("#exp-1 ", {
  opacity: 0.2,
  y: 140,

  scrollTrigger: {
    trigger: "#exp-1",
    start: "top 80%",
    end: "top 20%",
    scrub: true,
  },
});

gsap?.from("#exp-2 ", {
  opacity: 0.2,
  y: 140,
  scrollTrigger: {
    trigger: "#exp-2",
    start: "top 80%",
    end: "top 20%",
    scrub: true,
  },
});

gsap?.from("#exp-3 ", {
  opacity: 0.2,
  y: 140,
  scrollTrigger: {
    trigger: "#exp-3",
    start: "top 80%",
    end: "top 20%",
    scrub: true,
  },
});

gsap?.from("#exp-4 ", {
  opacity: 0.2,
  y: 140,
  scrollTrigger: {
    trigger: "#exp-4",
    start: "top 80%",
    end: "top 20%",
    scrub: true,
  },
});

// featured works

gsap?.from("#featured-work-1 span", {
  opacity: 0.2,
  stagger: 0.05,
  y: 50,
  scrollTrigger: {
    trigger: "#featured-work-1",
    start: "top 80%",
    end: "top 20%",
    scrub: true,
  },
});

gsap?.from("#featured-work-2 span", {
  opacity: 0.2,
  stagger: 0.05,
  y: 50,

  scrollTrigger: {
    trigger: "#featured-work-2",
    start: "top 80%",
    end: "top 20%",
    scrub: true,
  },
});

gsap?.from("#featured-work-3 span", {
  opacity: 0.2,
  stagger: 0.05,
  y: 50,

  scrollTrigger: {
    trigger: "#featured-work-3",
    start: "top 80%",
    end: "top 20%",
    scrub: true,
  },
});

gsap?.from("#project-1 ", {
  opacity: 0.2,
  y: 80,
  scale: 1.3,
  scrollTrigger: {
    trigger: "#project-1",
    start: "top 80%",
    end: "top 40%",
    scrub: true,
  },
});

gsap?.from("#project-2 ", {
  opacity: 0.2,
  y: 80,
  scale: 1.3,
  scrollTrigger: {
    trigger: "#project-2",
    start: "top 80%",
    end: "top 40%",
    scrub: true,
  },
});

gsap?.from("#project-3 ", {
  opacity: 0.2,
  y: 80,
  scale: 1.3,
  scrollTrigger: {
    trigger: "#project-3",
    start: "top 80%",
    end: "top 40%",
    scrub: true,
  },
});

//cursor change

const work1 = document.getElementById("project-1");
work1.addEventListener("mouseenter", () => {
  cursor.style.display = "none";
  cursorWrapper.innerText = "View";
  cursorWrapper.style.background = "#fff";
  cursorWrapper.style.width = "5rem";
  cursorWrapper.style.height = "5rem";
});
work1.addEventListener("mouseleave", () => {
  cursor.style.display = "flex";
  cursorWrapper.innerText = "";
  cursorWrapper.style.background = "transparent";
  cursorWrapper.style.width = "3.5rem";
  cursorWrapper.style.height = "3.5rem";
});

const work2 = document.getElementById("project-2");
work2.addEventListener("mouseenter", () => {
  cursor.style.display = "none";
  cursorWrapper.innerText = "View";
  cursorWrapper.style.background = "#fff";
  cursorWrapper.style.width = "5rem";
  cursorWrapper.style.height = "5rem";
});
work2.addEventListener("mouseleave", () => {
  cursor.style.display = "flex";
  cursorWrapper.innerText = "";
  cursorWrapper.style.background = "transparent";
  cursorWrapper.style.width = "3.5rem";
  cursorWrapper.style.height = "3.5rem";
});

const work3 = document.getElementById("project-3");
work3.addEventListener("mouseenter", () => {
  cursor.style.display = "none";
  cursorWrapper.innerText = "View";
  cursorWrapper.style.background = "#fff";
  cursorWrapper.style.width = "5rem";
  cursorWrapper.style.height = "5rem";
});
work3.addEventListener("mouseleave", () => {
  cursor.style.display = "flex";
  cursorWrapper.innerText = "";
  cursorWrapper.style.background = "transparent";
  cursorWrapper.style.width = "3.5rem";
  cursorWrapper.style.height = "3.5rem";
});

const cursorInvertElements = document.querySelectorAll(".invert-cursor");

Array.from(cursorInvertElements).map((element) => {
  element.addEventListener("mouseenter", () => {
    cursorWrapper.style.background = "rgb(255,255,255)";
    cursorWrapper.style.mixBlendMode = "exclusion";
    cursor.style.display = "none";
    cursorWrapper.style.width = "5rem";
    cursorWrapper.style.height = "5rem";
  });
  element.addEventListener("mouseleave", () => {
    cursorWrapper.style.background = "transparent";
    cursorWrapper.style.mixBlendMode = "normal";
    cursor.style.display = "flex";
    cursorWrapper.style.width = "3.5rem";
    cursorWrapper.style.height = "3.5rem";
  });
});
