const YOUTUBE_DEMO_URL = 'https://youtu.be/_Syt4atlYfo';

const buyButton = document.querySelector('.buy-button');
if (buyButton) {
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
