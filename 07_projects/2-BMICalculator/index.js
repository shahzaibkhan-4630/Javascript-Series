const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please Enter A Valid height`;
    return;
  }

  if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please Enter A Valid weight`;
    return;
  }

  const BMI = (weight / ((height * height) / 10000)).toFixed(2);
  let message = `<span>Your BMI: ${BMI}</span><br/>`;

  if (BMI < 18.6) {
    message += `<span>You are Underweight</span>`;
  } else if (BMI >= 18.6 && BMI <= 24.9) {
    message += `<span>You have a Normal weight</span>`;
  } else {
    message += `<span>You are Overweight</span>`;
  }
  results.innerHTML = message;
});
