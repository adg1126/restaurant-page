let aContent = document.createElement('div');
aContent.classList.add('show');
aContent.setAttribute('id', 'about');

let title = document.createElement('div');
title.classList.add('title');
title.textContent = "Taipei 249";

let text = document.createElement('div');
text.classList.add('text');
text.textContent = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."';

export {aContent};
export let aboutTab = (domElement) => {
    aContent.style.display = 'block';
    aContent.append(title, text);
    domElement.append(aContent);
};