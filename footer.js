document.addEventListener('DOMContentLoaded', function () {
  const footer = document.querySelector('footer.site-footer');
  if (!footer) return;
  footer.innerHTML = `
    <div class="container footer-inner">
      <p>© 2026 Johan Falk · Falk AI · Org.nr 559507-3908</p>
      <a href="/#kontakt">Kontakt</a>
    </div>
  `;
});
