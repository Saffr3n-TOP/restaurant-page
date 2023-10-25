// @ts-check
import '../assets/styles/menu.css';

/** @param {string} title  */
function createMenuItem(title) {
  const heading = document.createElement('h2');
  heading.className = 'card__heading';
  heading.textContent = title;

  const image = document.createElement('div');
  image.className = 'card__image';
  image.textContent = 'image placeholder';

  const paragraph = document.createElement('p');
  paragraph.className = 'text card__text';
  paragraph.textContent = "Text describing awesome meal's awesome ingreients.";

  const card = document.createElement('div');
  card.className = 'card';
  card.append(heading, image, paragraph);

  return card;
}

const heading = document.createElement('h1');
heading.className = 'main__heading';
heading.textContent = 'Menu';

const menuItems = document.createElement('div');
menuItems.className = 'menu__items';

for (let i = 1; i <= 12; i++) {
  menuItems.appendChild(createMenuItem(`Awesome Meal ${i}`));
}

const menu = document.createElement('div');
menu.className = 'menu';
menu.append(heading, menuItems);

export default menu;
