document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('nav.nav');
  if (!nav) return;
  nav.innerHTML = `
    <a href="/" class="logo">Falk AI</a>
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
});
