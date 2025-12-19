// In Order to Cahnge Background you need to select Body So Here Select the Body
const body = document.querySelector("body");
const buttons = document.querySelectorAll(".button");
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    // Here in the e.target you will get the Id so here you can Addit
    if (e.target.id === "red") {
      body.style.background = e.target.id;
    }

    if (e.target.id === "grey") {
      body.style.background = e.target.id;
    }

    if (e.target.id === "Yellow") {
      body.style.background = e.target.id;
    }

    if (e.target.id === "Blue") {
      body.style.background = e.target.id;
    }
  });
});
