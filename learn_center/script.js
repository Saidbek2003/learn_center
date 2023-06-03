const navlink=document.querySelectorAll(".nav_link"),
time = document.querySelector(".time"),
time_month= document.querySelector(".time_month"),
time_day= document.querySelector(".time_day"),
time_hour= document.querySelector(".time_hour"),
time_min= document.querySelector(".time_min"),
time_second= document.querySelector(".time_second");







console.log(time);


// login_bnt = document. querySelectorAll(".login_bnt");
// login_bnt.forEach(login =>{
//    login.addEventListener("click",()=>{
//     console.log(login);
//    })
// })
// const time=document.querySelector(".time")


// function active link
function linkColor(){
    
    navlink.forEach(link=>{
        link.classList.remove("active_link")
        this.classList.add('active_link')
    })
}

navlink.forEach(link=>{
    link.addEventListener('click',linkColor)
})


setInterval(()=>{
    const mydate = new Date()
    mySecond = mydate.getSeconds();
    time_second.textContent=mydate.getSeconds()
    time_min.textContent= mydate.getMinutes();
    time_hour.textContent= mydate.getHours();
    time_day.textContent=mydate.getDay()
    time_month.textContent= mydate.getMonth()
},1000)




// swiper js
  var swiper = new Swiper(".mySwi per", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });