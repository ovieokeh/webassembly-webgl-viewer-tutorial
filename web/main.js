import init, { draw_triangle } from "../pkg/webassembly_webgl_viewer.js";

const CANVAS_ID = "triangle";

async function run() {
  await init();

  const color = [1.0, 0.0, 0.0, 1.0];
  draw_triangle(CANVAS_ID, color);
}

run();

const colorChangerForm = document.getElementById("color-changer");
colorChangerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const color = [
    clampRGBValue(e.target.elements.red.value),
    clampRGBValue(e.target.elements.green.value),
    clampRGBValue(e.target.elements.blue.value),
    1.0,
  ];

  draw_triangle(CANVAS_ID, color);
});

function clampRGBValue(value) {
  return parseFloat((parseFloat(value) / 255 || 0).toFixed(2));
}
