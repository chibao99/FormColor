function animateForm(){
    const arrows = document.querySelectorAll('.fa-arrow-down');
    arrows.forEach(arrow=>{
        arrow.addEventListener('click',()=>{
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const next = parent.nextElementSibling;
            if(input.type==="text"&&validateUser(input)){
                nextSlide(parent,next);
            }
            if(input.type ==="email"&&validateEmail(input)){
                nextSlide(parent,next);
            }
            if(input.type==="password"&&validatePassword(input)){
                nextSlide(parent,next);
            }else{
                parent.style.animation = 'shake 0.5s ease';
            }
            parent.addEventListener('animationend',()=>{
                parent.style.animation = "";
            })
        })
    })
}
function validateUser(user){
    if(user.value.length < 6){
        error('#4de071');
    }else{
        error('#d87af0');
        return true;
    }
}
function validateEmail(email){
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(validation.test(email.value)){
        error('#d87af0');
        return true;
    }else{
        error('#4de071');
    }
}
function validatePassword(pass){
    const validation = /^[A-Z][a-z0-9]+/;
    if(validation.test(pass.value)){
        error('#d87af0');
        return true;
    }else{
        error('#4de071');
    }
}
function nextSlide(parent,next){
    parent.classList.add('innactive');
    parent.classList.remove('innactive');
    next.classList.add('active');
}
function error(color){
    document.body.style.backgroundColor = color;
}
animateForm();