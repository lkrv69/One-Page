(function(){
  function onScroll(){
    const el = document.querySelector('.hero-ill'); if(!el) return;
    const r = el.getBoundingClientRect(); const vh = window.innerHeight || document.documentElement.clientHeight;
    const visible = Math.max(0, Math.min(1, 1 - r.top / vh)); el.style.transform = `translateY(${(1-visible) * 12}px)`;
  }
  window.addEventListener('scroll', onScroll, { passive:true }); window.addEventListener('DOMContentLoaded', onScroll);
})();