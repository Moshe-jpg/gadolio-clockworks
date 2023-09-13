// glare effect on hover

// VanillaTilt.init(document.querySelector(".clock"), {
//     max: 20,
//     speed: 400,
//     perspective: 500,
//     glare: true,
//     "max-glare": 1,
//   });

const clockElement = document.querySelector(".case");
document.addEventListener("DOMContentLoaded", () => {
    VanillaTilt.init(clockElement, {
  max: 20,
  speed: 400,
  perspective: 500,
  glare: true,
  "max-glare": 1,
});
})

