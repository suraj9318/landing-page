
window.onload = function toggle(){
    let toggle = document.querySelector('#nav .toggle-btn')
    let collapse = document.querySelector('#nav .collapse')

    toggle.addEventListener('click',(e)=>{
        collapse.classList.toggle('active')
    })
}