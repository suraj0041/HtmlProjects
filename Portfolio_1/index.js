const section = document.querySelectorAll('section');
const navLink=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    section.forEach(element => {
        let top=window.scrollY;
        let offset=element.offsetTop-150;
        let height=element.offsetHeight;
        let id=element.getAttribute('id')
        if(top>=offset && top<=offset+height){
            navLink.forEach(link=>{
                link.classList.remove('active')
                document.querySelector('header nav a[href="#'+id+'"]').classList.add('active')
            })
        } 
    });

    //--- Creating a stickey nav bar
var header=document.querySelector('header')
header.classList.toggle('sticky',window.screenY>100)
//-----create toggle change---
menubar.classList.remove('bx-x');
navbar.classList.remove('active');
}
let menubar=document.querySelector('#menu');
let navbar=document.querySelector('.navbar');
menubar.onclick=()=>{
    menubar.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
//--------Text change animation

    var typed = new Typed('.home-detail h3 span', {
      strings: ['.Net Developer', 'React Frontend Develper'],
      
      typeSpeed: 100,
      startDelay:1000,
      backSpeed:100,
      backDelay:500,
      loop:true,
      loopCount: Infinity,
      
    });
