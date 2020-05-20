import _ from 'lodash';
require('./styles.css');
import {homeTab, hContent} from './modules/home.js'
import {aboutTab, aContent} from './modules/about.js'
import {menuTab, mContent} from './modules/menu.js'


let content = document.getElementById('content');

// tabs
let navBar = document.createElement('nav');
navBar.classList.add('nav-bar');
content.appendChild(navBar);

let restaurantName = document.createElement('div');
restaurantName.classList.add('restaurant-name');
restaurantName.textContent = 'Taipei 249';

let tab0 = document.createElement('div');
tab0.setAttribute('id', 'tab-0');
tab0.classList.add('tab-item');
tab0.textContent = 'Home';

let tab1 = document.createElement('div');
tab1.setAttribute('id', 'tab-1');
tab1.classList.add('tab-item');
tab1.textContent = 'About';

let tab2 = document.createElement('div');
tab2.setAttribute('id', 'tab-2');
tab2.classList.add('tab-item');
tab2.textContent = 'Menu';

navBar.append(restaurantName, tab0, tab1, tab2);

let burger = document.createElement('burger');
burger.classList.add('burger');
for (let i = 1; i < 4; i++) burger.innerHTML += `<div class='line${i}'></div>`;
content.appendChild(burger);

// img
let header = document.createElement('header');
header.classList.add('showcase');
content.appendChild(header);

let content1 = document.createElement('div');
content1.classList.add('content-1');
header.appendChild(content1);


let footer = document.createElement('footer');
footer.classList.add('center');
content.appendChild(footer);

let p1 = document.createElement('p');
p1.textContent = 'By Diane Gutierrez for The Odin Project Curriculum';
footer.appendChild(p1);

let tabItems = document.querySelectorAll('.tab-item');

function selecItem(e) {
    (e.target.id == 'tab-0') ?
        ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) ?
            (aContent.remove(), mContent.remove(), homeTab(content1), navBarSlide())
        : (aContent.remove(), mContent.remove(), homeTab(content1))
    : (e.target.id == 'tab-1') ?
        ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) ?
            (hContent.remove(), mContent.remove(), aboutTab(content1), navBarSlide())
        : (hContent.remove(), mContent.remove(), aboutTab(content1))
    :
        ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) ?
            (hContent.remove(), aContent.remove(), menuTab(content1), navBarSlide())
        : (hContent.remove(), aContent.remove(), menuTab(content1));
};

homeTab(content1);
tabItems.forEach(tab => tab.addEventListener('click', selecItem));


function navBarSlide () {
    navBar.classList.toggle('nav-bar-active');

    tabItems.forEach((tab, index) => {
        (tab.style.animation) ? tab.style.animation = ''
            : tab.style.animation = `tabItemFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    });

    burger.classList.toggle('x');

    (navBar.classList.contains('nav-bar-active')) ? content1.firstChild.style.display = 'none'
        : setTimeout(() => content1.firstChild.style.display = 'block', 100);
};

burger.addEventListener('click', navBarSlide);