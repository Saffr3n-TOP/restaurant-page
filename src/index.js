// @ts-check
import '../assets/styles/index.css';
import header from './header';
import main from './main';
import footer from './footer';

const content = document.querySelector('.content');
content?.append(header, main, footer);
