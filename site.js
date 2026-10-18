(function () {
  const c = window.IQRAA_CONFIG || {};
  const setLink = (id, url) => { const el = document.getElementById(id); if (el && url) el.href = url; };
  document.querySelectorAll('[data-config-link]').forEach(el => {
    const path = el.getAttribute('data-config-link').split('.');
    let val = c; path.forEach(k => { val = val && val[k]; });
    if (val) el.href = val;
  });
  document.querySelectorAll('[data-config-text]').forEach(el => {
    const path = el.getAttribute('data-config-text').split('.');
    let val = c; path.forEach(k => { val = val && val[k]; });
    if (val) el.textContent = val;
  });
  const social = document.getElementById('social-links');
  if (social) {
    const items = [
      ['YouTube', c.socials && c.socials.youtube],
      ['Facebook', c.socials && c.socials.facebook],
      ['TikTok', c.socials && c.socials.tiktok],
      ['Instagram', c.socials && c.socials.instagram],
      ['Telegram', c.socials && c.socials.telegram]
    ];
    social.innerHTML = items.filter(x => x[1]).map(x => `<a href="${x[1]}" target="_blank" rel="noopener noreferrer">${x[0]}</a>`).join(' · ');
  }
  function renderVideos(id, items, emptyText) {
    const host = document.getElementById(id);
    if (!host) return;
    if (!items || !items.length) {
      host.innerHTML = `<div class="video-empty">${emptyText}</div>`;
      return;
    }
    host.innerHTML = items.map(v => `
      <article class="video-card">
        <a href="https://www.youtube.com/watch?v=${encodeURIComponent(v.id)}" target="_blank" rel="noopener noreferrer" aria-label="${v.title || 'Watch video'}">
          <img loading="lazy" src="https://i.ytimg.com/vi/${encodeURIComponent(v.id)}/hqdefault.jpg" alt="">
          <span class="play">▶</span>
        </a>
        <h3>${v.title || 'Arabic lesson'}</h3>
      </article>`).join('');
  }
  renderVideos('shorts', c.videos && c.videos.shorts, 'YouTube Shorts will appear here after the channel and video list are added.');
  renderVideos('long-videos', c.videos && c.videos.long, 'Long-form lessons will appear here after the channel and video list are added.');
  const yt = document.getElementById('youtube-button');
  if (yt) {
    if (c.socials && c.socials.youtube) yt.href = c.socials.youtube;
    else { yt.href = '#'; yt.addEventListener('click', e => { e.preventDefault(); alert('Add the YouTube channel URL in site-config.js first.'); }); }
  }
  const paypal = document.getElementById('paypal-email');
  if (paypal && c.paypalEmail) paypal.textContent = c.paypalEmail;
  const cal = c.calendlyUrl || '';
  document.querySelectorAll('[data-calendly]').forEach(el => {
    if (cal) { el.href = cal; el.target = '_blank'; el.rel = 'noopener noreferrer'; }
    else {
      el.href = c.whatsapp || '#';
      el.setAttribute('data-calendly-pending', 'true');
      el.textContent = el.getAttribute('data-pending-label') || el.textContent;
    }
  });
})();