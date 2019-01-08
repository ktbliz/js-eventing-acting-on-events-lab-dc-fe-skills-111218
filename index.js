var dodger = document.getElementbyId("dodger");

function moveDodgerRight() {
  var rightNumber = dodger.style.right.replace("px", ""); 
  var right = parseInt(rightNumber, 10);
  if (right > 0) {
    dodger.style.right = `${right -1}px`;
  }
}

document.addEventListener("keydown", e => {if (e.which === 37) {
  moveDodgerRight()
}
})