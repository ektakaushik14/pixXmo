var div = document.querySelector(".subtitle");

var theText = "Every pixel has a moment";
for (let i = 0; i < theText.length; i++) {
  var delay = (i * 3) / theText.length;

  var z = document.createElement("span");
  z.classList.add("design");
  z.innerText = theText[i];
  div.append(z);
  z.style.animationDelay = delay + "s";
}

var rubber = document.querySelectorAll(".rub");

rubber.forEach((item) =>
  item.addEventListener("mouseover", () => {
    item.classList.add("rubber-band");
    item.addEventListener("animationend", () => {
      item.classList.remove("rubber-band");
    });
  })
);
