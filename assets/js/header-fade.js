(function(){
  function toggle(){
    const h = document.querySelector('.site-header');
    if(!h) return;
    if(window.scrollY > 0) h.classList.add('show'); else h.classList.add('show');
  }
  window.addEventListener('scroll', toggle, { passive: true });
  window.addEventListener('DOMContentLoaded', toggle);
})();