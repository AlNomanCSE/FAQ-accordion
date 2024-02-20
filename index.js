const title1 = document.querySelector(".title1");
const title2 = document.querySelector(".title2");
const title3 = document.querySelector(".title3");
const title4 = document.querySelector(".title4");
const content1 = document.querySelector(".content1");
const content2 = document.querySelector(".content2");
const content3 = document.querySelector(".content3");
const content4 = document.querySelector(".content4");

let expandedContent = null;

for (let i = 1; i <= 4; i++) {
  const title = document.querySelector(`.title${i}`);
  const content = document.querySelector(`.content${i}`);
  const img = title.querySelector("img");

  title.addEventListener("click", () => {
    if (expandedContent) {
      expandedContent.classList.remove("expand");
      expandedContent.previousElementSibling.querySelector("img").src =
        "./images/icon-plus.svg";
    }
    if (expandedContent !== content) {
      content.classList.add("expand");
      img.src = "./images/icon-minus.svg";
      expandedContent = content;
    } else {
      img.src = "./images/icon-plus.svg";
      expandedContent = null;
    }
  });
}
