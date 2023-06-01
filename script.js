const pixelsTag = document.querySelector("div.pixels");
const bodyTag = document.querySelector("body");
const progressTag = document.querySelector("div.progress");
const sections = document.querySelectorAll("section");
const clientTag = document.querySelector("div.client");
const pageTag = document.querySelector("div.page");

//when we scroll the page, update the pixel tag to be how far we've scrolled
document.addEventListener("scroll", () => {
  const pixels = Math.round(scrollY);
  pixelsTag.innerHTML = pixels;
});

//when we scroll the page, make a progress bar that keeps track of the distance

document.addEventListener("scroll", () => {
  const pixels = window.scrollY;
  const pageHeight = bodyTag.getBoundingClientRect().height; // returns an object and we access the height within this object
  const totalScrollableDistance = pageHeight - window.innerHeight;

  const percentage = (pixels / totalScrollableDistance) * 100;
  progressTag.style.width = `${percentage}%`;
});

document.addEventListener("scroll", () => {
  const pixels = window.pageYOffset;
  sections.forEach((section) => {
    if (section.offsetTop < pixels) {
    }
  });
});
