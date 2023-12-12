//user input form
function updateSnakesAndLadders() {
  // Get form input values
  const snake1Start = parseInt(document.getElementById("snake1Start").value);
  const snake1End = parseInt(document.getElementById("snake1End").value);

  const snake2Start = parseInt(document.getElementById("snake2Start").value);
  const snake2End = parseInt(document.getElementById("snake2End").value);

  const snake3Start = parseInt(document.getElementById("snake3Start").value);
  const snake3End = parseInt(document.getElementById("snake3End").value);

  const snake4Start = parseInt(document.getElementById("snake4Start").value);
  const snake4End = parseInt(document.getElementById("snake4End").value);

  const ladder1Start = parseInt(document.getElementById("ladder1Start").value);
  const ladder1End = parseInt(document.getElementById("ladder1End").value);

  const ladder2Start = parseInt(document.getElementById("ladder2Start").value);
  const ladder2End = parseInt(document.getElementById("ladder2End").value);

  const ladder3Start = parseInt(document.getElementById("ladder3Start").value);
  const ladder3End = parseInt(document.getElementById("ladder3End").value);

  // Save input values to localStorage or use any other method to pass data to the game
  localStorage.setItem("snake1Start", snake1Start);
  localStorage.setItem("snake1End", snake1End);

  localStorage.setItem("snake2Start", snake2Start);
  localStorage.setItem("snake2End", snake2End);

  localStorage.setItem("snake3Start", snake3Start);
  localStorage.setItem("snake3End", snake3End);

  localStorage.setItem("snake4Start", snake4Start);
  localStorage.setItem("snake4End", snake4End);

  localStorage.setItem("ladder1Start", ladder1Start);
  localStorage.setItem("ladder1End", ladder1End);

  localStorage.setItem("ladder2Start", ladder2Start);
  localStorage.setItem("ladder2End", ladder2End);

  localStorage.setItem("ladder3Start", ladder3Start);
  localStorage.setItem("ladder3End", ladder3End);

  // Redirect to the game page
  window.location.href = "./snake.html";
}

// Setting the default values
function setDefaultValues() {
  // Set default values for snake and ladder positions
  document.getElementById("snake1Start").value = 21;
  document.getElementById("snake1End").value = 3;

  document.getElementById("snake2Start").value = 49;
  document.getElementById("snake2End").value = 6;

  document.getElementById("snake3Start").value = 60;
  document.getElementById("snake3End").value = 22;

  document.getElementById("snake4Start").value =99;
  document.getElementById("snake4End").value = 10;

  document.getElementById("ladder1Start").value = 8;
  document.getElementById("ladder1End").value = 23;

  document.getElementById("ladder2Start").value = 11;
  document.getElementById("ladder2End").value = 55;

  document.getElementById("ladder3Start").value = 70;
  document.getElementById("ladder3End").value = 85;

  //for setting the value and goint to the game page
  updateSnakesAndLadders();

  // Clear input fields
  document.getElementById('snake1Start').value = "";
  document.getElementById('snake1End').value = "";

  document.getElementById('snake2Start').value = "";
  document.getElementById('snake2End').value = "";

  document.getElementById('snake3Start').value = "";
  document.getElementById('snake3End').value = "";

  document.getElementById('snake4Start').value = "";
  document.getElementById('snake4End').value = "";

  document.getElementById('ladder1Start').value = "";
  document.getElementById('ladder1End').value = "";

  document.getElementById('ladder2Start').value = "";
  document.getElementById('ladder2End').value = "";

  document.getElementById('ladder3Start').value = "";
  document.getElementById('ladder3End').value = "";
}
