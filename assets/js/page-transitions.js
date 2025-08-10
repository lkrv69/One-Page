(function(){
  const html = document.documentElement;
  const isInternal = (a) => a.host === location.host;
  const enable = () => { html.classList.add('transition-ready'); };
  const enter = () => { html.classList.add('transition-in'); requestAnimationFrame(() => html.classList.remove('transition-in')); };
  const leave = (url) => {
    if (document.startViewTransition) { document.startViewTransition(() => { location.href = url; }); return; }
    html.classList.add('transition-out'); setTimeout(() => location.href = url, 200);
  };
  window.addEventListener('DOMContentLoaded', () => { enable(); enter(); });
  window.addEventListener('pageshow', (e) => { if (e.persisted) { enable(); enter(); } });
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href]'); if (!a) return;
    if (a.target === '_blank' || a.hasAttribute('download') || a.getAttribute('href').startsWith('#')) return;
    if (!isInternal(a)) return; e.preventDefault(); leave(a.href);
  });
})();