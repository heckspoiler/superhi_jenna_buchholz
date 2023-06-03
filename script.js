const pixelsTag = document.querySelector("div.pixels");
const bodyTag = document.querySelector("body");
const progressTag = document.querySelector("div.progress");
const sections = document.querySelectorAll("section");
const clientTag = document.querySelector("div.client");
const pageTag = document.querySelector("div.page");
const headerTag = document.querySelector("header");

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
    if (section.offsetTop - 150 <= pixels) {
      clientTag.innerHTML = section.getAttribute("data-client");
      pageTag.innerHTML = section.getAttribute("data-page");
      if (section.hasAttribute("data-is-dark")) {
        headerTag.classList.add("white");
        progressTag.classList.add("white-bg");
      } else {
        headerTag.classList.remove("white");
        progressTag.classList.remove("white-bg");
      }
    }
  });
});

// we want to move certain tags based on how far they are from an anchor point
// what is the anchor point? the middle of the section
// how far should we parallax? it's a ratio of the distance scrolled to the middle point

document.addEventListener("scroll", () => {
  const topViewport = window.scrollY;
  const midViewport = Math.round(topViewport + window.innerHeight / 2);
  sections.forEach((section) => {
    const topSection = section.offsetTop;
    const midSection = topSection + section.offsetHeight / 2;
    const distanceToSection = midViewport - midSection;
    const parallaxTag = section.querySelectorAll(`[data-parallax]`);
    parallaxTag.forEach((tag) => {
      const speed = parseFloat(tag.getAttribute("data-parallax"));
      tag.style.transform = `translate(0, ${distanceToSection * speed}px)`;
    });
  });
});
