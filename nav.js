document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('nav.nav');
  if (!nav) return;
  nav.innerHTML = `
    <a href="/" class="logo">Falk AI</a>
    <button class="nav-toggle" aria-label="Öppna menyn" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links">
      <li><a href="/#tjanster">Tjänster</a></li>
      <li><a href="/om.html">Om mig</a></li>
      <li><a href="/bocker/">Böcker</a></li>
      <li><a href="/media.html">Medieklipp</a></li>
      <li><a href="/verktygslada/">Verktyg</a></li>
      <li><a href="/lanktips/">Länktips</a></li>
      <li><a href="/en.html">English</a></li>
      <li><a href="/#kontakt" class="btn-nav">Kontakt</a></li>
    </ul>
  `;

  const toggle = nav.querySelector('.nav-toggle');
  toggle.addEventListener('click', function () {
    const open = nav.classList.toggle('nav--open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Stäng menyn' : 'Öppna menyn');
  });

  nav.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('nav--open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Öppna menyn');
    });
  });
});
