(() => {
  const clock = document.getElementById('clock');
  const tick = () => {
    const d = new Date();
    const hh = String(d.getUTCHours()).padStart(2, '0');
    const mm = String(d.getUTCMinutes()).padStart(2, '0');
    const ss = String(d.getUTCSeconds()).padStart(2, '0');
    if (clock) clock.textContent = `UTC ${hh}:${mm}:${ss}`;
  };
  tick();
  setInterval(tick, 1000);
})();
