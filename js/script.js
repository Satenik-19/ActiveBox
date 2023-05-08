baguetteBox.run(".baguetteBoxOne");
baguetteBox.run(".gallery", {
  buttons: true,
});

let menu = document.querySelector(".red_circle");
let div1 = document.querySelector(".first_div");
let div2 = document.querySelector(".middle_div");
let div3 = document.querySelector(".least_div");
let div_white = document.querySelector(".div_white");
let change = document.querySelector(".change");
let right = document.querySelector(".right");
let rightA = document.querySelectorAll(".right a");
let bool = true;

function closeMenu() {
  div1.style.transform = "none";
  div2.style.display = "block";
  div3.style.transform = "none";
  div_white.style.position = "static";
  change.removeAttribute("class", "right2");

  rightA.forEach((item) => {
    item.style.visibility = "hidden";
  });

  bool = true;
}

menu.addEventListener("click", () => {
  if (bool) {
    div1.style.transform = "rotate(45deg)";
    div2.style.display = "none";
    div3.style.transform = "rotate(-45deg)";
    div_white.style.position = "absolute";

    change.setAttribute("class", "right2");

    rightA.forEach((item) => {
      item.style.visibility = "visible";
      item.addEventListener("click", () => {
        closeMenu();
      });
    });

    bool = false;
  } else {
    closeMenu();
  }
});
