const derecho = document.getElementById("derecho");
const body = document.getElementById("body");

function renderi() {
  function agregarPosicion(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    setTimeout(() => {
      derecho.style.left = `${x}px`;
      derecho.style.top = `${y}px`;
    }, 500);
  }

  body.addEventListener("mousemove", agregarPosicion, true);

  derecho.addEventListener("mouseenter", () => {
    body.removeEventListener("mousemove", agregarPosicion, true);
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

body.addEventListener('resize', renderi)

renderi();
