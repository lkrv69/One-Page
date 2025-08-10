(function(){
  function onScroll(){
    const el = document.querySelector('.hero-ill');
    if(!el) return;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const visible = Math.max(0, Math.min(1, 1 - rect.top / vh));
    el.style.transform = `translateY(${(1-visible) * 12}px)`; // smooth parallax
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('DOMContentLoaded', onScroll);
})();