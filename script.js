const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
  document.body.classList.toggle('menu-open', !isOpen);
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Abrir menu');
    document.body.classList.remove('menu-open');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const photoViewer = document.querySelector('.photo-viewer');
if (typeof photoViewer?.showModal === 'function') {
  const imageContainer = photoViewer.querySelector('.photo-viewer-image');
  document.addEventListener('click', (event) => {
    const tile = event.target.closest('a[data-photo-view]');
    if (!tile || event.defaultPrevented || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    const enlargedPhoto = new Image();
    enlargedPhoto.alt = tile.querySelector('img').alt;
    enlargedPhoto.src = tile.href;
    imageContainer.replaceChildren(enlargedPhoto);
    photoViewer.showModal();
  });

  if (!('closedBy' in photoViewer)) {
    const outside = (event) => {
      const bounds = photoViewer.getBoundingClientRect();
      return event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom;
    };
    let pressedOutside = false;
    photoViewer.addEventListener('pointerdown', (event) => { pressedOutside = outside(event); });
    photoViewer.addEventListener('pointerup', (event) => {
      if (pressedOutside && outside(event)) photoViewer.close();
      pressedOutside = false;
    });
  }
}
