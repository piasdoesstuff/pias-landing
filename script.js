(() => {
  const clock = document.getElementById("clock");
  const tick = () => {
    const d = new Date();
    const hh = String(d.getUTCHours()).padStart(2, "0");
    const mm = String(d.getUTCMinutes()).padStart(2, "0");
    const ss = String(d.getUTCSeconds()).padStart(2, "0");
    if (clock) clock.textContent = `UTC ${hh}:${mm}:${ss}`;
  };
  tick();
  setInterval(tick, 1000);
})();

(() => {
  const pre = document.getElementById("ascii");
  if (!pre) return;

  const W = 22;
  const H = 12;
  const ramp = " .:-=+*#%@";
  let mx = 0.5;
  let my = 0.5;
  let t = 0;

  const setFromEvent = (e) => {
    const r = pre.getBoundingClientRect();
    mx = (e.clientX - r.left) / r.width;
    my = (e.clientY - r.top) / r.height;
    mx = Math.max(0, Math.min(1, mx));
    my = Math.max(0, Math.min(1, my));
  };

  pre.addEventListener("mousemove", setFromEvent);
  pre.addEventListener(
    "touchmove",
    (e) => {
      if (!e.touches?.length) return;
      setFromEvent(e.touches[0]);
    },
    { passive: true }
  );

  const render = () => {
    t += 0.035;
    let out = "";

    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        const nx = x / (W - 1);
        const ny = y / (H - 1);

        const dx = nx - mx;
        const dy = ny - my;
        const d = Math.sqrt(dx * dx + dy * dy);

        const wave = Math.sin((nx * 6 + t) * 1.2) + Math.cos((ny * 6 - t) * 1.1);
        const influence = Math.max(0, 1 - d * 2.2);

        const v = wave * 0.18 + influence * 0.95;
        const vv = Math.max(0, Math.min(1, (v + 1) / 2));
        const idx = Math.floor(vv * (ramp.length - 1));

        out += ramp[idx];
      }
      out += "\n";
    }

    pre.textContent = out;
    requestAnimationFrame(render);
  };

  render();
})();
