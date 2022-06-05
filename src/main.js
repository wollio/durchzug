require('fslightbox');

import './assets/css/index.css';

import './partials/navigation.hbs';
import './partials/header.hbs';
import './partials/icons/avatar.hbs';
import './partials/collaborators.hbs';
import './partials/post.hbs';
import './partials/pagination.hbs';

import './index.hbs';
import './post.hbs';
import './tag.hbs';

console.log("hi :)");

function wrap(el, wrapper) {
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
}

window.onload = function () {
  document.querySelectorAll(".kg-gallery-image img").forEach(function (element) {
    let wrapper = document.createElement('a');
    //wrapper.setAttribute("data-no-swup", true);
    wrapper.setAttribute("data-fslightbox", "gallery")
    wrapper.setAttribute('href', element.getAttribute('src'));
    wrap(element, wrapper);
  });

  refreshFsLightbox();
}

let primaryNavigation = document.getElementById('primaryNavigation');
primaryNavigation.getElementsByTagName('button')[0].addEventListener('click', function () {
  primaryNavigation.classList.toggle('open');
})

let addClasses = ['shadow-2xl', 'bg-gray-50'];
if (!primaryNavigation.classList.contains('px-4')) {
  addClasses.push('px-4');
  addClasses.push('py-2');
}
