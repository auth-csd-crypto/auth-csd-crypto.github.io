(function () {
  const KEY = "fontScale";
  const MIN = 0.85;
  const MAX = 1.30;
  const STEP = 0.05;

  function clamp(x) { return Math.min(MAX, Math.max(MIN, x)); }
  function apply(scale) {
    document.documentElement.style.fontSize = (scale * 100) + "%";
  }

  let scale = parseFloat(localStorage.getItem(KEY) || "1.0");
  scale = clamp(scale);
  apply(scale);

  document.getElementById("font-inc")?.addEventListener("click", () => {
    scale = clamp(scale + STEP);
    localStorage.setItem(KEY, String(scale));
    apply(scale);
  });

  document.getElementById("font-dec")?.addEventListener("click", () => {
    scale = clamp(scale - STEP);
    localStorage.setItem(KEY, String(scale));
    apply(scale);
  });
})();
