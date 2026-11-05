// Paste the live Lemon Squeezy checkout URL here when the product is ready.
const LEMON_SQUEEZY_CHECKOUT_URL = '';
const YOUTUBE_DEMO_URL = 'https://youtu.be/_Syt4atlYfo';

if (LEMON_SQUEEZY_CHECKOUT_URL) {
  const checkout = document.querySelector('.button-disabled');
  const link = document.createElement('a');
  link.className = 'button button-primary';
  link.href = LEMON_SQUEEZY_CHECKOUT_URL;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.innerHTML = 'Buy on Lemon Squeezy <span aria-hidden="true">↗</span>';
  checkout.replaceWith(link);
  document.querySelector('.checkout-wrap p').textContent = 'Secure checkout powered by Lemon Squeezy.';
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
