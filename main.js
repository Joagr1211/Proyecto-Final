const menuItems = document.querySelectorAll('.menu-item');

const menuBtn = document.querySelector('#menu-btn');


menuBtn.addEventListener('click',function(){
    document.body.classList.toggle('mobile-menu-active')
})


menuItems.forEach(function(item){
item.addEventListener('click', function (e){
const activeItem = document.querySelector('.active');
activeItem.classList.remove('active');
e.target.classList.add ('active');    
});  
});

function enableDarkMode() {
    let main_body = document.body;
    main_body.classList.toggle("dark-mode");

   
}
