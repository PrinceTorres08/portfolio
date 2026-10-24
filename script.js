var btn = document.getElementById('menu-btn');
var links = document.getElementById('links');
btn.addEventListener('click', function () {
  var open = links.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
links.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') {
    links.classList.remove('open');
    btn.setAttribute('aria-expanded', false);
  }
});
document.getElementById('year').textContent = new Date().getFullYear();
