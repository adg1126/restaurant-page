let mContent = document.createElement('div');
mContent.classList.add('show')
mContent.setAttribute('id', 'menu');

let title = document.createElement('div');
title.classList.add('title');
title.textContent = "Menu";

let grid = document.createElement('div');
grid.classList.add('grid');

let appetizer = document.createElement('div');
appetizer.classList.add('appetizer');
appetizer.textContent = 'Appetizer';

let mainCourse = document.createElement('div');
mainCourse.classList.add('main-course')
mainCourse.textContent = 'Main course';

let dessert = document.createElement('div');
dessert.classList.add('dessert');
dessert.textContent = 'Dessert';

let cell0 = document.createElement('div');
cell0.classList.add('menu-item');
cell0.textContent = 'Scalliion Pancakes';
cell0.innerHTML += '<p>Green onions, vegetable oil</p>';

let cell1 = document.createElement('div');
cell1.classList.add('menu-item');
cell1.textContent = 'Xiao Long Bao(Soup Dumplings)';
cell1.innerHTML += '<p>Pork, gelatin, flour, ginger, garlic, soy sauce, broth, scallion, salt, sesame oil</p>';

let cell2 = document.createElement('div');
cell2.classList.add('menu-item');
cell2.textContent = 'Bao Bing(Shaved Ice)';
cell2.innerHTML += '<p>Bao Bing topped with taro balls, mung beans and grass jelly</p>';

let cell3 = document.createElement('div');
cell3.classList.add('menu-item');
cell3.textContent = 'Zong Zi(Sticky Rice Dumpling)';
cell3.innerHTML += '<p>Pork belly, red bean paste, bamboo leaves, glutinous rice</p>';

let cell4 = document.createElement('div');
cell4.classList.add('menu-item');
cell4.textContent = 'Gua Bao(Taiwanese Burger)';
cell4.innerHTML += '<p>Pork belly, pickled mustard greens, steamed buns, five spice</p>';

let cell5 = document.createElement('div');
cell5.classList.add('menu-item');
cell5.textContent = 'Yuebing(Moon Cake)';
cell5.innerHTML += '<p>Salted egg yolk, water, golden syrup, lotus paste, cake</p>';

let cell6 = document.createElement('div');
cell6.classList.add('menu-item');
cell6.textContent = 'Tian bu la (Taiwanese oden)';
cell6.innerHTML += '<p>Fish fillet, eggs, tapioca flour</p>';

let cell7 = document.createElement('div');
cell7.classList.add('menu-item');
cell7.textContent = 'Beef noodle soup';
cell7.innerHTML += '<p>Stewed beef, beef broth, vegetables, noodles</p>';

let cell8 = document.createElement('div');
cell8.classList.add('menu-item');
cell8.textContent = 'Fengli Su(Pineaaple Cake)';
cell8.innerHTML += '<p>Pineapple, eggs, sugar, flour, vanilla</p>';

export {mContent};
export let menuTab = (domElement) => {
    mContent.style.display = 'block';
    grid.append(appetizer, mainCourse, dessert, cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8);
    mContent.append(title, grid);
    domElement.append(mContent);
};