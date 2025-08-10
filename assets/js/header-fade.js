(function(){
  function toggle(){
    const h = document.querySelector('.site-header');
    if(!h) return;
    // show on load; class also persists while scrolling
    h.classList.add('show');
  }
  window.addEventListener('DOMContentLoaded', toggle);
})();