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

const featureGallery = document.querySelector('#concha-gallery');

if (featureGallery) {
  const featureSlides = [...featureGallery.querySelectorAll('.feature-slide')];
  const featurePhotos = [...featureGallery.querySelectorAll('[data-feature-photo]')];
  const featureCount = featureGallery.querySelector('[data-feature-count]');
  let featureActiveIndex = 0;

  const showFeaturePhoto = (index, moveFocus = false) => {
    featureActiveIndex = (index + featureSlides.length) % featureSlides.length;
    featureSlides.forEach((slide, slideIndex) => {
      const active = slideIndex === featureActiveIndex;
      slide.hidden = !active;
      slide.setAttribute('aria-hidden', String(!active));
    });
    featurePhotos.forEach((photo, photoIndex) => {
      const active = photoIndex === featureActiveIndex;
      photo.classList.toggle('is-active', active);
      photo.setAttribute('aria-pressed', String(active));
    });
    featureCount.textContent = String(featureActiveIndex + 1).padStart(2, '0');
    if (moveFocus) featurePhotos[featureActiveIndex].focus();
  };

  featurePhotos.forEach((photo) => {
    photo.addEventListener('click', () => showFeaturePhoto(Number(photo.dataset.featurePhoto)));
  });
  featureGallery.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      showFeaturePhoto(featureActiveIndex + 1, true);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showFeaturePhoto(featureActiveIndex - 1, true);
    }
  });
}

const companyGallery = document.querySelector('.company-gallery');

if (companyGallery) {
  const companySlides = [...companyGallery.querySelectorAll('.company-slide')];
  const companyPhotos = [...companyGallery.querySelectorAll('[data-company-photo]')];
  const companyCount = companyGallery.querySelector('[data-company-count]');
  let companyActiveIndex = 0;

  const showCompanyPhoto = (index, moveFocus = false) => {
    companyActiveIndex = (index + companySlides.length) % companySlides.length;
    companySlides.forEach((slide, slideIndex) => {
      const active = slideIndex === companyActiveIndex;
      slide.hidden = !active;
      slide.setAttribute('aria-hidden', String(!active));
    });
    companyPhotos.forEach((photo, photoIndex) => {
      const active = photoIndex === companyActiveIndex;
      photo.classList.toggle('is-active', active);
      photo.setAttribute('aria-pressed', String(active));
    });
    companyCount.textContent = String(companyActiveIndex + 1).padStart(2, '0');
    if (moveFocus) companyPhotos[companyActiveIndex].focus();
  };

  companyPhotos.forEach((photo) => {
    photo.addEventListener('click', () => showCompanyPhoto(Number(photo.dataset.companyPhoto)));
  });
  companyGallery.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      showCompanyPhoto(companyActiveIndex + 1, true);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showCompanyPhoto(companyActiveIndex - 1, true);
    }
  });
}

const trailerGallery = document.querySelector('#trailer-gallery');

if (trailerGallery) {
  const trailerSlides = [...trailerGallery.querySelectorAll('.trailer-slide')];
  const trailerPhotos = [...trailerGallery.querySelectorAll('[data-trailer-photo]')];
  const trailerCount = trailerGallery.querySelector('[data-trailer-count]');
  let trailerActiveIndex = 0;

  const showTrailerPhoto = (index, moveFocus = false) => {
    trailerActiveIndex = (index + trailerSlides.length) % trailerSlides.length;
    trailerSlides.forEach((slide, slideIndex) => {
      const active = slideIndex === trailerActiveIndex;
      slide.hidden = !active;
      slide.setAttribute('aria-hidden', String(!active));
    });
    trailerPhotos.forEach((photo, photoIndex) => {
      const active = photoIndex === trailerActiveIndex;
      photo.classList.toggle('is-active', active);
      photo.setAttribute('aria-pressed', String(active));
    });
    trailerCount.textContent = String(trailerActiveIndex + 1).padStart(2, '0');
    if (moveFocus) trailerPhotos[trailerActiveIndex].focus();
  };

  trailerPhotos.forEach((photo) => {
    photo.addEventListener('click', () => showTrailerPhoto(Number(photo.dataset.trailerPhoto)));
  });
  trailerGallery.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      showTrailerPhoto(trailerActiveIndex + 1, true);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showTrailerPhoto(trailerActiveIndex - 1, true);
    }
  });
}

const hydraulicGallery = document.querySelector('#hydraulic-gallery');

if (hydraulicGallery) {
  const hydraulicSlides = [...hydraulicGallery.querySelectorAll('.hydraulic-slide')];
  const hydraulicPhotos = [...hydraulicGallery.querySelectorAll('[data-hydraulic-photo]')];
  const hydraulicCount = hydraulicGallery.querySelector('[data-hydraulic-count]');
  let hydraulicActiveIndex = 0;

  const showHydraulicPhoto = (index, moveFocus = false) => {
    hydraulicActiveIndex = (index + hydraulicSlides.length) % hydraulicSlides.length;
    hydraulicSlides.forEach((slide, slideIndex) => {
      const active = slideIndex === hydraulicActiveIndex;
      slide.hidden = !active;
      slide.setAttribute('aria-hidden', String(!active));
    });
    hydraulicPhotos.forEach((photo, photoIndex) => {
      const active = photoIndex === hydraulicActiveIndex;
      photo.classList.toggle('is-active', active);
      photo.setAttribute('aria-pressed', String(active));
    });
    hydraulicCount.textContent = String(hydraulicActiveIndex + 1).padStart(2, '0');
    if (moveFocus) hydraulicPhotos[hydraulicActiveIndex].focus();
  };

  hydraulicPhotos.forEach((photo) => {
    photo.addEventListener('click', () => showHydraulicPhoto(Number(photo.dataset.hydraulicPhoto)));
  });
  hydraulicGallery.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      showHydraulicPhoto(hydraulicActiveIndex + 1, true);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showHydraulicPhoto(hydraulicActiveIndex - 1, true);
    }
  });
}

const deliveryGallery = document.querySelector('#entregas .gallery');
if (deliveryGallery) {
  const image = deliveryGallery.querySelector('#delivery-photo');
  const buttons = [...deliveryGallery.querySelectorAll('[data-photo]')];
  const selectPhoto = (index) => {
    const button = buttons[index];
    image.src = button.dataset.photo;
    image.alt = button.getAttribute('aria-label');
    buttons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
  };
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => selectPhoto(index));
    button.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
      event.preventDefault();
      const next = (index + (event.key === 'ArrowRight' ? 1 : -1) + buttons.length) % buttons.length;
      selectPhoto(next);
      buttons[next].focus();
    });
  });
}

const carousel = document.querySelector('#product-carousel');

if (carousel) {
  const slides = [...carousel.querySelectorAll('.carousel-slide')];
  const indicators = [...carousel.querySelectorAll('.carousel-indicator')];
  const counter = carousel.querySelector('[data-carousel-count]');
  const heroTitle = document.querySelector('[data-hero-title]');
  const heroEmphasis = document.querySelector('[data-hero-emphasis]');
  const heroDescription = document.querySelector('[data-hero-description]');
  const heroProductLink = document.querySelector('[data-hero-product-link]');
  const heroLinkLabel = document.querySelector('[data-hero-link-label]');
  const productCopy = [
    {
      title: 'Conchas',
      emphasis: 'para o campo.',
      description: 'A concha frontal Barros traz mais força e praticidade para movimentar cargas, carregar caminhões e manusear fertilizantes e ração.',
      linkLabel: 'Conheça as conchas',
      href: '#conchas',
    },
    {
      title: 'Carreta',
      emphasis: 'para o campo.',
      description: 'A carreta agrícola Barros facilita o transporte de grãos, ração, fertilizantes e outros insumos da propriedade.',
      linkLabel: 'Conheça a carreta',
      href: '#carretas',
    },
    {
      title: 'Prensagem',
      emphasis: 'hidráulica.',
      description: 'A Barros oferece prensagem de mangueiras hidráulicas em Coqueiral, Minas Gerais.',
      linkLabel: 'Conheça a prensagem',
      href: '#mangueiras',
    },
  ];
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let activeIndex = 0;
  let timer;
  let paused = false;

  const showSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === activeIndex;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
    });
    indicators.forEach((indicator, indicatorIndex) => {
      const active = indicatorIndex === activeIndex;
      indicator.classList.toggle('is-active', active);
      indicator.setAttribute('aria-current', String(active));
    });
    counter.textContent = String(activeIndex + 1).padStart(2, '0');
    const copy = productCopy[activeIndex];
    heroTitle.textContent = copy.title;
    heroEmphasis.textContent = copy.emphasis;
    heroDescription.textContent = copy.description;
    heroLinkLabel.textContent = copy.linkLabel;
    heroProductLink.href = copy.href;
  };

  const stopTimer = () => window.clearInterval(timer);
  const startTimer = () => {
    stopTimer();
    if (!paused && !prefersReducedMotion && !document.hidden) {
      timer = window.setInterval(() => showSlide(activeIndex + 1), 4500);
    }
  };

  indicators.forEach((indicator) => {
    indicator.addEventListener('click', () => {
      showSlide(Number(indicator.dataset.carouselTo));
      startTimer();
    });
  });
  carousel.querySelector('[data-carousel-prev]').addEventListener('click', () => {
    showSlide(activeIndex - 1);
    startTimer();
  });
  carousel.querySelector('[data-carousel-next]').addEventListener('click', () => {
    showSlide(activeIndex + 1);
    startTimer();
  });
  carousel.addEventListener('mouseenter', () => { paused = true; stopTimer(); });
  carousel.addEventListener('mouseleave', () => { paused = false; startTimer(); });
  carousel.addEventListener('focusin', () => { paused = true; stopTimer(); });
  carousel.addEventListener('focusout', (event) => {
    if (!carousel.contains(event.relatedTarget)) { paused = false; startTimer(); }
  });
  document.addEventListener('visibilitychange', startTimer);
  startTimer();
}

