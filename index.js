const btn = document.querySelector('#btn')
const reset = document.querySelector('#reset')
const msg = document.querySelector('.msg')
btn.addEventListener('click', changebg)
function changebg(e) {
    let bg_1 = Math.floor(Math.random()* 255)  
    let bg_2 = Math.floor(Math.random()* 255)
    let bg_3 = Math.floor(Math.random()* 255)
    let hex = bg_1.toString(16)+ bg_2.toString(16)+bg_3.toString(16)
    document.querySelector('div').style.backgroundColor = `#${hex}`
    msg.innerHTML = `<h1>${hex}</h1>`
    msg.style.backgroundColor = `${hex}`
    console.log(hex)
}

reset.addEventListener('click', resetbg)
function resetbg(){
    document.querySelector('div').style.backgroundColor = ``
    console.clear()
    msg.innerHTML = ''
}
