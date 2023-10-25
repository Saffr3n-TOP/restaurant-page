// @ts-check

const heading = document.createElement('h1');
heading.className = 'main__heading';
heading.textContent = 'Contact Us';

const paragraphOne = document.createElement('p');
paragraphOne.className = 'text';
paragraphOne.textContent =
  'Here you could find our contact information and our awesome location.';

const paragraphTwo = document.createElement('p');
paragraphTwo.className = 'text';
paragraphTwo.textContent = 'Only if this awesome restaurant was real...';

const contact = document.createElement('div');
contact.className = 'contact';
contact.append(heading, paragraphOne, paragraphTwo);

export default contact;
