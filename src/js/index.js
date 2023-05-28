const backgroundImgs = document.querySelectorAll(".parallaxImage");

let scrollNum = 0;
const totalNum = backgroundImgs.length;

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;

  backgroundImgs.forEach((item, index) => {
    item.style.transform = `perspective(500px) translate3d(0,0, ${
      scrollNum / (2 * (totalNum - index))
    }px)`;
  });
});
