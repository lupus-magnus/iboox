(async function typeWritter() {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  await sleep(300);
  var text = "Quem somos?";
  var element = document.querySelector("#typewritter");
  await sleep(1500);
  for (let i = 0; i < text.length; i++) {
    const cursor = document.querySelector("#cursor");
    if (cursor) {
      cursor.remove();
    }
    element.innerHTML =
      element.innerHTML +
      text.charAt(i) +
      `<span style="display: inline" id="cursor" class="cursor">&nbsp;</span>`;
    await sleep(150);
  }
})();
