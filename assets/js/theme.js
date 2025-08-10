(function(){
  const root = document.documentElement;
  const btn = () => document.getElementById('themeToggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  function apply(mode){
    let target = mode || localStorage.getItem('theme') || 'auto';
    if(target==='auto'){ target = prefersDark.matches ? 'dark' : 'light'; }
    root.setAttribute('data-theme', target === 'dark' ? '' : 'light');
    localStorage.setItem('theme', target);
    if(btn()) btn().textContent = (target==='dark' ? '☾' : '☀');
  }
  apply();
  prefersDark.addEventListener('change', () => apply('auto'));
  window.addEventListener('DOMContentLoaded', () => {
    if(btn()) btn().addEventListener('click', () => {
      const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      apply(current === 'dark' ? 'light' : 'dark');
    });
  });
})();