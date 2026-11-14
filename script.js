const YOUTUBE_DEMO_URL = 'https://youtu.be/_Syt4atlYfo';

const buyButton = document.querySelector('.buy-button');
if (buyButton) {
  const checkoutUrl = new URL(buyButton.href);
  const landingParams = new URLSearchParams(window.location.search);
  for (const name of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']) {
    const value = landingParams.get(name);
    if (value) checkoutUrl.searchParams.set(name, value);
  }
  buyButton.href = checkoutUrl.toString();
  buyButton.addEventListener('click', () => {
    gtag('event', 'buy_click');
  });
}

if (YOUTUBE_DEMO_URL) {
  const placeholder = document.querySelector('.video-placeholder');
  const link = document.createElement('a');
  link.className = 'button button-primary';
  link.href = YOUTUBE_DEMO_URL;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.innerHTML = '<span class="play-icon" aria-hidden="true">▶</span> Watch the demo on YouTube <span aria-hidden="true">↗</span>';
  placeholder.replaceWith(link);
}

document.getElementById('year').textContent = new Date().getFullYear();
