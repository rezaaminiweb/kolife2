const parag = document.getElementById('para1')
const menu2 = document.getElementById('menu2')
const div2 = document.getElementById('div2')
const menu1 = document.getElementById('menu1')
const div1 = document.getElementById('div1')
const menu3 = document.getElementById('menu3')
const div3 = document.getElementById('div3')
const menu4 = document.getElementById('menu4')
const div4 = document.getElementById('div4')
let _h1 = menu2.clientHeight
let _h2 = menu1.clientHeight
// let _h1 = menu2.clientHeight
let _h3 = menu3.clientHeight
let _h4 = menu4.clientHeight
div2.addEventListener('mouseenter',()=>{
    menu2.style.height = _h1+'px'
    // console.log(menu2.style.height);
})
div2.addEventListener('mouseleave',()=>{
    menu2.style.height=0+'px'
})
div1.addEventListener('mouseenter',()=>{
    menu1.style.height = _h2+'px'
    // console.log(menu2.style.height);
})
div1.addEventListener('mouseleave',()=>{
    menu1.style.height=0+'px'
})
div3.addEventListener('mouseenter',()=>{
    menu3.style.height = _h3+'px'
    // console.log(menu2.style.height);
})
div3.addEventListener('mouseleave',()=>{
    menu3.style.height=0+'px'
})
div4.addEventListener('mouseenter',()=>{
    menu4.style.height = _h4+'px'
    // console.log(menu2.style.height);
})
div4.addEventListener('mouseleave',()=>{
    menu4.style.height=0+'px'
})
menu2.style.height = '0'
menu1.style.height = '0'
menu3.style.height = '0'
menu4.style.height = '0'

parag.innerHTML = parag.innerText.split('').map((val,i)=>`<span class="text-sm bg-clip-text bg-gradient-to-b from-[#16438b] to-[#192b41] absolute text-transparent font-mono tracking-wider top-[-30%]  left-[50%] origin-[0px_70px]" style="transform:rotate(${i*6}deg)">${val}</span>`).join('')