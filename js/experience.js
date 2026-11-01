document.documentElement.classList.add('has-js');
const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('.primary-nav');
if(menuButton&&nav){
  menuButton.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded',String(open));
    menuButton.setAttribute('aria-label',open?'Menüyü kapat':'Menüyü aç');
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded','false');
  }));
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded','false');
    }
  });
}
const revealItems=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  const observer=new IntersectionObserver(entries=>{
    for(const entry of entries) if(entry.isIntersecting){
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  },{threshold:0.08,rootMargin:'0px 0px 40px 0px'});
  revealItems.forEach(item=>observer.observe(item));
}else{
  revealItems.forEach(item=>item.classList.add('is-visible'));
}
