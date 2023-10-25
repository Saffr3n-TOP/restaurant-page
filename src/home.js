// @ts-check
import Image from '../assets/images/home.png';

const image = document.createElement('img');
image.className = 'main__image';
image.src = Image;
image.alt = 'Awesome meal image';

const paragraphOne = document.createElement('p');
paragraphOne.className = 'main__text';
paragraphOne.innerHTML =
  'This is the <em>most</em> awesome restaurant you have <em>ever</em> come across! We are serving the <em>best</em> food you can even imagine!';

const paragraphTwo = document.createElement('p');
paragraphTwo.className = 'main__text';
paragraphTwo.innerHTML =
  'So what are you waiting for? Check out our menu <em>now</em> and come visit us, so you can try our meals yourself!';

const paragraphThree = document.createElement('p');
paragraphThree.className = 'main__text';
paragraphThree.innerHTML =
  'But <em>beware</em>, once you try, there is no way back. This is gonna be the <em>most</em> magnificent and addictive experience in your whole life!';

const home = document.createElement('div');
home.className = 'home';
home.append(image, paragraphOne, paragraphTwo, paragraphThree);

export default home;
