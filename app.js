// VARIABLES

const parent = document.querySelector("section");

let YPos = -100;

let i = 0;

let move = false;

const enemyColors = ["red", "blue", "grey"];

// FUCNTIONS

function generateRandomNumber() {
  let random = Math.floor(Math.random() * window.innerWidth);

  return random - 175;
}

function generateEnemyColor() {
  let randomColor = Math.floor(Math.random() * enemyColors.length);

  return randomColor;
}

function drawEnemy() {
  let element = document.createElement("div");
  parent.append(element);
  element.classList.add("circle");
  element.style.background = enemyColors[generateEnemyColor()];

  for (i; i < document.querySelectorAll("div").length; i++) {
    setEnemyPosition(document.querySelectorAll("div")[i]);
  }

  return element;
}

function setEnemyPosition(element) {
  element.style.left = generateRandomNumber() + "px";
  element.style.top = YPos + "px";

  return element;
}

function spawnEnemy(timeout) {
  const interval = setInterval(() => {
    drawEnemy();
    move = true;
  }, timeout);
}

function moveEnemy() {
  let PosY = -100;

  setInterval(() => {
    if (!move) {
      return;
    }

    PosY += 1;
    for (let j = 0; j < document.querySelectorAll("div").length; j++) {
      document.querySelectorAll("div")[i - 1].style.top = PosY + "px";
    }

    if (PosY > 950) {
      PosY = -100;
      move = false;
    }
  }, 1);
}

spawnEnemy(5000);
moveEnemy();
