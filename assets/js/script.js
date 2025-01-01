'use strict'

// Add events on elements
const addEventonElem = function(elem, type, callback){
    if(elem.length > 1){
        for(let i = 0; i < elem.length; i++){
            elem[i].addEventListener(type, callback);
        }
    } else{
        elem.addEventListener(type, callback)
    }
}

//nav toggler variables
const navbar = document.querySelector('[data-navbar]');
const navbarLinks = document.querySelectorAll('[data-nav-link]');
const navTogglers = document.querySelectorAll('[data-nav-toggler]');
const overlay = document.querySelector('[data-overlay]');
// Header active variable when we scroll down window.
const header = document.querySelector('[data-header]');

// toggler navbar
const toggleNavbar = function(){
  navbar.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('active');
}

// toggler navbar close
const closeNavbar = function(){
    navbar.classList.remove('active');
    overlay.classList.remove('active');
 document.body.classList.remove('active');
}

//Header active  when we scroll down window.
const showElemOnScroll = function(){
    if(window.scrollY > 100){
     header.classList.add('active');
    } else{
        header.classList.remove('active');
    }
   }


   // product filter
const filterBtns = document.querySelectorAll('[data-filter-btn]');
const filterBox = document.querySelector('[data-filter]');

let lastClickedFilterBtn = filterBtns[0];

const filter = function (){
lastClickedFilterBtn.classList.remove('active');
this.classList.add('active');
lastClickedFilterBtn = this;

filterBox.setAttribute('data-filter', this.dataset.filterBtn)
}


// event
addEventonElem(navTogglers, 'click', toggleNavbar);
addEventonElem(navbarLinks, 'click', closeNavbar);
addEventonElem(window, 'scroll', showElemOnScroll);
addEventonElem(filterBtns, 'click', filter);



