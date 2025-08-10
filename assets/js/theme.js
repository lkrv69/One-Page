(function(){
  const root = document.documentElement;
  const btn = () => document.getElementById('themeToggle');
  const pref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const saved = localStorage.getItem('theme') || 'auto';
  function setTheme(mode){
    if(mode==='auto'){ root.setAttribute('data-theme', (pref==='dark'?'dark':'light')); }
    else { root.setAttribute('data-theme', mode); }
    localStorage.setItem('theme', mode);
    if(btn()){ btn().textContent = root.getAttribute('data-theme')==='dark' ? '☾' : '☀'; }
  }
  setTheme(saved);
  window.addEventListener('DOMContentLoaded', function(){
    if(btn()){
      btn().addEventListener('click', function(){
        const current = root.getAttribute('data-theme');
        setTheme(current==='dark' ? 'light' : 'dark');
      });
    }
  });
})();