// Menu telas menor que 768px

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


//efeito nas letras
//Função para manipular o texto em formato de arrays e tratar com split,
// utilizando o metodo FOREACH incrementando letra por letra.
const bannerTitle = document.querySelector('.title')

function writingForm(element){
  const textArray = element.innerHTML.split('');
  element.innerHTML = '';
  textArray.forEach(function(letter, i){
    setTimeout(function(){
      element.innerHTML += letter;
    }, 100*i);
  })

}
writingForm(bannerTitle)


//Função para usar scroll nas DIV, usano efeito de slide nos campos adicionados.
//
const target = document.querySelectorAll('[data-animation]');
const animationClass = 'animation';

function animateScroll(){
  const windowTop = window.scrollY + ((window.innerHeight * 3)/4); //Metodo para imagem aparecer quando scroll estiver na metade da DIV.
  target.forEach(function(element){
    if(windowTop > element.offsetTop){
      element.classList.add(animationClass);
    }
    else{
      element.classList.remove(animationClass);
    }
  })
}

animateScroll()

if(target.length){
window.addEventListener('scroll', function(){
  animateScroll();
})
}



// Validação formulario
// Função para validar os campos de contato, sé será possivel enviar os dados preenchendo os campos de input.
// Metodo criado em cima dos required obrigatorio nos campos.

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



//Utilizado mask para o campo de numero whatsapp.
// Utilizado REGEX para o metodo de Replace.
//Utilizado a função a baixo apenas para fins didaticos com replace e entender a fromatação de um campo digitado.
// Utilizado a dica do site https://elcio.com.br/ajax/mascara/


function maskPhoneNumber(o,f){
  v_obj=o
  v_fun=f
  setTimeout("execmask()",0)
}
function execmask(){
  v_obj.value=v_fun(v_obj.value)
}
function maskTel(v){
  v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
  v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}
