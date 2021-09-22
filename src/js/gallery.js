import data from '../db/menu.json';
import myRefs from './refs';
import template from '../templates/myItem.hbs';

const { menu, body, checkbox } = myRefs;

const galleryList = template(data);
menu.insertAdjacentHTML('beforeend', galleryList);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const currentTheme = localStorage.getItem('theme');

if (!currentTheme) {
    localStorage.setItem('theme', Theme.LIGHT);
    body.classList.add(Theme.LIGHT)
} else {
    body.classList.add(currentTheme)
};

if (currentTheme === Theme.DARK) {
    checkbox.checked = true;
};

checkbox.addEventListener('change', onCheckboxClick);

function onCheckboxClick() {
   body.classList.toggle(Theme.DARK);
   body.classList.toggle(Theme.LIGHT);
        
   localStorage.setItem('theme', checkbox.checked ? Theme.DARK : Theme.LIGHT);
};
