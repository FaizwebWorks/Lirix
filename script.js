// gsap.to(".marquee", {
//     duration: 30,
//     x: "-100%",
//     ease: "linear",
//     repeat: Infinity,
// })

const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});
function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

const crs = document.querySelector(".cursor");
const main = document.querySelector(".main");

main.addEventListener("mousemove", (dets) => {
  gsap.to(crs, {
    x: dets.x,
    y: dets.y,
    duration: 0.4,
    ease: "cubic-bezier(0.87, 0, 0.13, 1)",
  });
});

// loco();

const page2 = document.querySelector(".page2");
const crsText = document.querySelector(".crs-text");
const crsImg = document.querySelector(".crs-img");

page2.addEventListener("mouseenter", () => {
  crsText.textContent = "Keep going";
  // crsImg.style.display = "block"
});
page2.addEventListener("mouseleave", () => {
  crsText.textContent = "Scroll";
});

const nav = document.querySelector("nav");

nav.addEventListener("mouseenter", () => {
  gsap.to(crs, {
    height: "13px",
    width: "13px",
    duration: 0.3,
    ease: "cubic-bezier(0.87, 0, 0.13, 1)",
  });
  crsText.style.display = "none";
  crsImg.style.display = "none";
});
nav.addEventListener("mouseleave", () => {
  gsap.to(crs, {
    height: "96px",
    width: "96px",
    duration: 0.3,
    ease: "cubic-bezier(0.87, 0, 0.13, 1)",
  });
  crsText.style.display = "flex";
  crsImg.style.display = "block";
});

let navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    gsap.to(crs, {
      opacity: 0,
      duration: 0.3,
      ease: "cubic-bezier(0.87, 0, 0.13, 1)",
    });
  });
  link.addEventListener("mouseleave", () => {
    gsap.to(crs, {
      opacity: 1,
      duration: 0.3,
      ease: "cubic-bezier(0.87, 0, 0.13, 1)",
    });
  });
});

const page3 = document.querySelector(".page3");

page3.addEventListener("mouseenter", function () {
  gsap.to(crs, {
    height: "13px",
    width: "13px",
    duration: 0.3,
    ease: "cubic-bezier(0.87, 0, 0.13, 1)",
  });
  crsText.style.display = "none";
  crsImg.style.display = "none";
});

page3.addEventListener("mouseleave", function () {
  gsap.to(crs, {
    height: "96px",
    width: "96px",
    duration: 0.3,
    ease: "cubic-bezier(0.87, 0, 0.13, 1)",
  });
  crsText.style.display = "block";
  crsImg.style.display = "block";
});

const page4 = document.querySelector(".page4");
const page4Img = document.querySelector(".page4-img")
const crsContainer = document.querySelector(".crs-container")
page4.addEventListener("mouseenter", function () {
  gsap.to(crs, {
    height: "13px",
    width: "13px",
    duration: 0.3,
    ease: "cubic-bezier(0.87, 0, 0.13, 1)",
  });
  crsText.style.display = "none";
  crsImg.style.display = "none";
});

page4Img.addEventListener("mouseenter", function() {
  gsap.to(crs, {
    height: "96px",
    width: "96px",
    duration: 0.3,
    ease: "cubic-bezier(0.87, 0, 0.13, 1)",
  })
  crsText.style.display = "block"
  crsImg.style.display = "block"
  crsText.textContent = "Read more"
  crsImg.style.transform = "rotate(-90deg)"
  crsContainer.style.gap = "0px"
})

page4Img.addEventListener("mouseleave", function() {
  gsap.to(crs, {
    height: "13px",
    width: "13px",
    duration: 0.3,
    ease: "cubic-bezier(0.87, 0, 0.13, 1)",
  })
  crsText.style.display = "none"
  crsImg.style.display = "none"
  crsText.textContent = ""
  crsImg.style.transform = "rotate(0)"
  crsContainer.style.gap = "8px"
})


