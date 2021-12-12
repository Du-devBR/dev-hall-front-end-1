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

menu_mobile.addEventListener('click', menuToggle);
menu_mobile.addEventListener('touchstart', menuToggle);


// Validação formulario

const requestFields = document.querySelectorAll('[required')

function customValidation(event){
  const field = event.target

 function errors(){
   let foundError = false;

   for(const error in field.validity ){
     if(error != 'customError' && field.validity[error]){
       foundError = true
     }

    }

    return foundError;

}
const error = errors()
console.log('erro', error)

if(error){
  field.setCustomValidity('Campo obrigatorio para contato')
}
else{
  field.setCustomValidity('')
}

}

for(const field of requestFields){
  field.addEventListener('invalid', customValidation)
}
