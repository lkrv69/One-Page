const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.menu');
if(toggle){
  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    const expanded = toggle.getAttribute('aria-expanded') === 'true' || false;
    toggle.setAttribute('aria-expanded', !expanded);
  });
}