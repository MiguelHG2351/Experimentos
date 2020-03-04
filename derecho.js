let derecho = document.getElementById("derecho");
const body = document.getElementById("body");

function render() {
  function agregarPosicion(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    setTimeout(() => {
      derecho.style.left = `${x}px`;
      derecho.style.top = `${y}px`;
    }, 40);
  }

  window.addEventListener("mousemove", agregarPosicion, true);

  derecho.addEventListener("mouseenter", () => {
    window.removeEventListener("mousemove", agregarPosicion, true);
  });

  body.addEventListener("mousedown", agregarPosicion, false);

  body.addEventListener("click", () => {
    derecho.classList.remove("flex");
  });
}

body.addEventListener("contextmenu", e => {
  derecho.classList.add("flex");
  e.preventDefault();
});

body.addEventListener('resize', render)
render();
