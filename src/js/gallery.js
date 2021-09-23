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

const { LIGHT, DARK } = Theme;

const currentTheme = localStorage.getItem('theme') || LIGHT;

localStorage.setItem('theme', currentTheme);
body.classList.add(currentTheme);
checkbox.checked = currentTheme === DARK;

checkbox.addEventListener('change', onCheckboxClick);

function onCheckboxClick() {
   body.classList.toggle(Theme.DARK);
   body.classList.toggle(Theme.LIGHT);

   localStorage.setItem('theme', checkbox.checked ? Theme.DARK : Theme.LIGHT);
};
