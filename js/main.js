// le changement de la nav barre quand on scrolle
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle
    ('wind-scroll', window.scrollY > 100)
})

// le changement des cartes faqs



const faqss = document.querySelectorAll('.faq');
faqss.forEach((faq) => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');

  });
});


// menu

const menu = document.querySelector(".nav_menu");
const menubtn = document.querySelector("#openbtnmenu");
const menuclosebtn = document.querySelector("#closebtnmenu");

menubtn.addEventListener('click',() =>{
  menu.style.display = "flex";
  menubtn.style.display = "none";
  menuclosebtn.style.display= "inline-block";
})
menuclosebtn.addEventListener('click',() =>{
  menu.style.display = "none";
  menuclosebtn.style.display = "none";
  menubtn.style.display= "inline-block";
})

