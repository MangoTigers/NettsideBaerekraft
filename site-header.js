const headerMarkup = `
<nav class="navbar navbar-expand-lg navbar-dark bg-success shadow-sm">
  <div class="container">
    <a class="navbar-brand fw-semibold" href="index.html">Bærekraft</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mainNavbar">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item"><a class="nav-link" href="index.html" data-page="index.html">Hjem</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tema</a>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="index.html#miljo">Miljøpåvirkning</a></li>
            <li><a class="dropdown-item" href="index.html#losninger">Bærekraftige løsninger</a></li>
            <li><a class="dropdown-item" href="index.html#tanker">Egne tanker</a></li>
            <li><a class="dropdown-item" href="index.html#kilder">Kilder</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>`;

function mountSiteHeader(targetId = 'site-header') {
  const target = document.getElementById(targetId);
  if (!target) {
    return;
  }

  target.innerHTML = headerMarkup;

  const currentPage = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  target.querySelectorAll('[data-page]').forEach((link) => {
    const isActive = link.getAttribute('data-page')?.toLowerCase() === currentPage;
    link.classList.toggle('active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'page');
    }
  });
}

mountSiteHeader();