let burger = document.getElementById('burger');
burger.addEventListener('click',function(){
burger.classList.toggle('burger__active')
document.getElementById('over').classList.toggle('blur')
document.getElementById('list').classList.toggle('active')
document.getElementById('list').style.opacity = 1
document.getElementById('logo').classList.toggle('logo__active')
})
