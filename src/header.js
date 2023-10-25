// @ts-check
import '../assets/styles/header.css';
import logo from './logo';
import nav from './nav';

const header = document.createElement('header');
header.className = 'header';
header.append(logo, nav);

export default header;
