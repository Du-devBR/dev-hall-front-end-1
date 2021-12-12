const buttonMobile = document.getElementById('menu_mobile');


function menuToggle(event){
  if (event.type === 'touchstart') event.preventDefault();
  const navRedesSociais = document.getElementById('nav');
  navRedesSociais.classList.toggle('active');
  const active = navRedesSociais.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if(active){
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  }
  else{
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

menu_mobile.addEventListener('click', menuToggle)
menu_mobile.addEventListener('touchstart', menuToggle)
