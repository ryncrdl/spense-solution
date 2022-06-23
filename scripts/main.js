const navBtn = document.querySelector(".btnNav");
const nav = document.querySelector("nav");

navBtn.onclick = () => {
  nav.classList.toggle("show");
};

const padding_responsive = () => {
  const header = document.querySelector("header");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    header.style.padding = "0.5rem 0rem";
    header.style.boxShadow = "0rem 0.1rem 0.2rem -0.2rem #000000";
  } else {
    header.style.padding = "3rem 0rem";
    header.style.boxShadow = "none";
    nav.classList.remove("show");
  }
};

window.onscroll = () => {
  padding_responsive();
};
window.onload = () => {
  padding_responsive();
};
