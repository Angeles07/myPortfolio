const texts=["Software Developer","Graphic Designer","Programmer", "Data Analyst"]
let count=0,index=0,currentText='',letter=''

function type(){
if(count===texts.length){count=0}
currentText=texts[count]
letter=currentText.slice(0,++index)
document.getElementById('typing').textContent=letter

if(letter.length===currentText.length){
count++
index=0
setTimeout(type,1000)
}else{
setTimeout(type,100)
}
}
type()


window.addEventListener('load',()=>{
document.querySelectorAll('.fade').forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight){
el.classList.add('show')
}
})
})


window.addEventListener('scroll',()=>{
let scrollY = window.scrollY

document.querySelectorAll('.fade').forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight - 100){
el.classList.add('show')
}
})

document.querySelectorAll('.progress-bar').forEach(bar=>{
if(bar.getBoundingClientRect().top < window.innerHeight - 50){
bar.style.width = bar.dataset.width
}
})


let sections=document.querySelectorAll('section')
let navLinks=document.querySelectorAll('.nav-link')

sections.forEach(sec=>{
let offset=sec.offsetTop-150
let height=sec.offsetHeight
let id=sec.id

if(scrollY >= offset && scrollY < offset + height){
navLinks.forEach(link=>link.classList.remove('active'))
let activeLink = document.querySelector('.nav-link[href=\"#'+id+'\"]')
if(activeLink) activeLink.classList.add('active')
}
})

document.querySelectorAll('.parallax').forEach(el=>{
let speed = 0.03
el.style.transform = "translateY(" + (scrollY * speed) + "px)"
})

document.body.classList.add('scrolling')
clearTimeout(window.scrollTimer)

window.scrollTimer = setTimeout(()=>{
document.body.classList.remove('scrolling')
},200)

const nav = document.querySelector('.navbar')
if(scrollY > 50){
nav.classList.add('scrolled')
}else{
nav.classList.remove('scrolled')
}

})
const filterButtons=document.querySelectorAll('.filter-btn')
const projects=document.querySelectorAll('.project-item')

filterButtons.forEach(btn=>{
btn.addEventListener('click',()=>{

filterButtons.forEach(b=>b.classList.remove('active'))
btn.classList.add('active')

let filter=btn.getAttribute('data-filter')

projects.forEach(project=>{
if(filter==='all' || project.getAttribute('data-category')===filter){
project.classList.remove('hide')
}else{
project.classList.add('hide')
}
})

})
})

document.querySelector("form").addEventListener("submit", async function(e){
  e.preventDefault()

  const form = e.target
  const data = new FormData(form)

  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': 'application/json' }
  })

  if(response.ok){
    alert("Message sent successfully!")
    form.reset()
  } else {
    alert("Something went wrong.")
  }
})