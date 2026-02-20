(() => {
  const canvas = document.getElementById("ascii-canvas");
  if (!canvas) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ctx = canvas.getContext("2d");
  const chars = " .:-=+*#%@";
  const mouse = { x: -9999, y: -9999 };

  let cols = 0;
  let rows = 0;
  let cell = 16;
  let t = 0;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    cell = window.innerWidth < 640 ? 14 : 16;
    cols = Math.ceil(window.innerWidth / cell);
    rows = Math.ceil(window.innerHeight / cell);
    ctx.font = `${cell - 2}px ui-monospace, SFMono-Regular, Menlo, monospace`;
    ctx.textBaseline = "top";
  }

  function draw() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.fillStyle = "rgba(124, 240, 210, 0.45)";

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const px = x * cell;
        const py = y * cell;

        const wave = Math.sin((x * 0.35 + y * 0.25 + t) * 0.8) * 0.5 + 0.5;
        const dx = px - mouse.x;
        const dy = py - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist / 160);
        const v = Math.min(1, wave + influence * 0.9);
        const idx = Math.max(0, Math.min(chars.length - 1, Math.floor(v * chars.length)));

        ctx.fillText(chars[idx], px, py);
      }
    }

    t += 0.01;
    if (!reducedMotion) requestAnimationFrame(draw);
  }

  window.addEventListener("pointermove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener("pointerleave", () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  window.addEventListener("resize", resize);
  resize();
  draw();
})();
