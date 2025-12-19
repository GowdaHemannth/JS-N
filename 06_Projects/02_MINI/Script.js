const froms = document.querySelector("form");
console.log(froms);
froms.addEventListener("submit", function (e) {
  //Here these Beacuase IN bUTTON We will Have Default Values That i need to Restore It
  e.preventDefault();
  const HieghtH = parseInt(document.querySelector("#Height").value);
  const WeightW = parseInt(document.querySelector("#Wieght").value);
  const Results = document.querySelector("#results");
  console.log(Results);

  if (isNaN(HieghtH) || HieghtH <= 0) {
    Results.innerHTML = "Please enter a valid height";
    return;
  } else if (isNaN(WeightW) || WeightW <= 0) {
    Results.innerHTML = "Please enter a valid weight";
  }
});
