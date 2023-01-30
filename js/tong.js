let deskNav = document.querySelector(".inner_head");
let deskNavHeight = deskNav.getBoundingClientRect().height;

document.addEventListener('scroll', ()=>{
  if(window.scrollY > deskNavHeight){
    deskNav.classList.add("active");
  } else {
    deskNav.classList.remove("active")
  }
})

