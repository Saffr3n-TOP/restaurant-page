// @ts-check
import '../assets/styles/nav.css';
import main from './main';
import home from './home';
import menu from './menu';
import contact from './contact';

/**
 * @param {string} href
 * @param {string} textContent
 * @param {boolean} [active]
 */
function createNavItem(href, textContent, active) {
  const activeLinkClass = 'nav__link_active';

  const link = document.createElement('a');
  link.className = 'link nav__link';
  if (active) link.classList.add(activeLinkClass);
  link.href = href;
  link.textContent = textContent;
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const activeLink = document.querySelector(`.${activeLinkClass}`);
    activeLink?.classList.remove(activeLinkClass);
    link.classList.add(activeLinkClass);

    main.innerHTML = '';

    const linkUrlPathStartsAt = link.href.lastIndexOf('/') + 1;
    const linkUrlPath = link.href.substring(linkUrlPathStartsAt);

    switch (linkUrlPath) {
      case 'index':
        main.appendChild(home);
        break;
      case 'menu':
        main.appendChild(menu);
        break;
      case 'contact':
        main.appendChild(contact);
    }
  });

  const navItem = document.createElement('li');
  navItem.className = 'nav__item';
  navItem.appendChild(link);

  return navItem;
}

const navItemHome = createNavItem('./index', 'Home', true);
const navItemMenu = createNavItem('./menu', 'Menu');
const navItemContact = createNavItem('./contact', 'Contact');

const navMenu = document.createElement('ul');
navMenu.className = 'nav__menu';
navMenu.append(navItemHome, navItemMenu, navItemContact);

const nav = document.createElement('nav');
nav.className = 'nav';
nav.appendChild(navMenu);

export default nav;
