(function(){
  const root = document.documentElement;
  const meta = document.querySelector('#themeColorMeta');
  const btn = () => document.getElementById('themeToggle');
  function apply(mode){
    const t = mode; root.setAttribute('data-theme', t);
    try{ localStorage.setItem('theme', t);}catch(e){}
    if(meta) meta.setAttribute('content', t==='dark' ? '#0a0a0a' : '#f5f5f7');
    if(btn()) btn().textContent = (t==='dark' ? '☾' : '☀');
  }
  function init(){
    let stored = null; try{ stored = localStorage.getItem('theme'); }catch(e){}
    if(!stored){ stored = 'dark'; } apply(stored);
  }
  init();
  window.addEventListener('DOMContentLoaded', () => {
    if(btn()) btn().addEventListener('click', () => {
      const cur = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      apply(cur === 'dark' ? 'light' : 'dark');
    });
    const h = document.querySelector('.site-header'); if(h) h.classList.add('show');
  });
})();