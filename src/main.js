import './style.css';
import { createProfileView } from './views/profile.js';

// Set document title and favicon from env
const NAME = import.meta.env.VITE_NAME;
const LOGO = import.meta.env.VITE_LOGO;

if (NAME && String(NAME).trim().length) {
  document.title = NAME;
}

function setFavicon(href) {
  if (!href) return;
  let link = document.querySelector('link[rel="icon"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'icon');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

setFavicon(LOGO || '/logo.svg');

createProfileView(document.querySelector('#app'));
