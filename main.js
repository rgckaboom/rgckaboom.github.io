const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("search-box");

searchIcon.addEventListener('click',function(){
    if(searchBox.style.top=='72px'){
        searchBox.style.top='24px';
        searchBox.style.pointerEvents='none';
    } else {
        searchBox.style.top='72px';
        searchBox.style.pointerEvents='auto';
    }
    // When we click the search box appears and disappears
    // By changing the height of the box and pointerEvents
});

menuIcon.addEventListener('click',function(){
    if(slideoutMenu.style.opacity=='0.95'){
        slideoutMenu.style.opacity='0';
        slideoutMenu.style.pointerEvents='none';
    }else{
        slideoutMenu.style.opacity='0.95';
        slideoutMenu.style.pointerEvents='auto';
    }
});