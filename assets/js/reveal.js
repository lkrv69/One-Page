(function(){
  function initReveal(){
    const targets = document.querySelectorAll('.markdown-body > *:not(.hero), .markdown-body .section, .hero');
    targets.forEach(el => el.classList.add('reveal'));
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
    targets.forEach(el => io.observe(el));
  }
  window.addEventListener('DOMContentLoaded', initReveal);
})();