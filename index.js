var dodger = document.getElementById("dodger");

function moveDodgerRight() {
  var rightNumber = dodger.style.left.replace("px", ""); 
  var right = parseInt(rightNumber, 10);
  if (right > 0) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", e => {if (e.which === 39) {
  moveDodgerRight()
}
})

