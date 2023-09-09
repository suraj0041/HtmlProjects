var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  const loginsection=document.querySelector('.login-section');
  const RegisterLink=document.querySelector('.RegisterLink');
  const LoginLink=document.querySelector('.LoginLink');

  RegisterLink.addEventListener('click',()=>{
    loginsection.classList.remove('active');
  })

  LoginLink.addEventListener('click',()=>{
    loginsection.classList.add('active');
    
  })