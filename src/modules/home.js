let hContent = document.createElement('div');
hContent.classList.add('show');
hContent.setAttribute('id', 'home');

let title = document.createElement('div');
title.classList.add('title');
title.textContent = 'Taipei 249';

let text = document.createElement('div');
text.classList.add('text');
text.textContent = `Located at Taipei 123 Bulding 456
    Phone Number: 123-456-789`;

export { hContent };
export let homeTab = (domElement) => {
  hContent.style.display = 'block';
  hContent.append(title, text);
  domElement.append(hContent);
};
