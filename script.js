const navMenuButton = document.querySelector(".menuBar-closeBar");
const navMenuImgSrc = document.querySelector(".menuBar-closeBar").children[0].children[0];
const navMenuSmallScreen = document.querySelector(".navChild-sm");
const roateImg = document.querySelector(".rotateImg");
const ImgSrc = navMenuImgSrc.src;
const navMenuSmallScreenHeight = navMenuSmallScreen.style.height;

navMenuButton.addEventListener("click", () => {
  navMenuImgSrc.src =
    navMenuImgSrc.src === ImgSrc
      ? (navMenuImgSrc.src = "./icon/xSolid.svg")
      : (navMenuImgSrc.src = ImgSrc);
  navMenuSmallScreen =
    navMenuSmallScreen.style.height === navMenuSmallScreenHeight
      ? (navMenuSmallScreen.style.height = "600px")
      : (navMenuSmallScreen.style.height = navMenuSmallScreenHeight);
});
document.addEventListener("scroll", () => {
  roateImg.style.transform = `rotate(${Math.floor(scrollY)}deg)`;
});
