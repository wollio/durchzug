require('fslightbox');

import './assets/css/index.css';

import './partials/navigation.hbs';
import './partials/header.hbs';
import './partials/icons/avatar.hbs';
import './partials/collaborators.hbs';
import './partials/post.hbs';
import './partials/pagination.hbs';

import './index.hbs';
import './portfolio.hbs';
import './post.hbs';
import './page-about.hbs';
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

let ticking = false;

document.addEventListener('scroll', function(e) {
  if (!ticking) {
    window.requestAnimationFrame(function() {
      if (window.scrollY > 20) {
        primaryNavigation.classList.add(...addClasses);
        primaryNavigation.classList.remove('bg-white');
      } else {
        primaryNavigation.classList.remove(...addClasses);
        primaryNavigation.classList.add('bg-white');
      }
      ticking = false;
    });
    ticking = true;
  }
});

let primaryNavigation = document.getElementById('primaryNavigation');
primaryNavigation.getElementsByTagName('button')[0].addEventListener('click', function () {
  primaryNavigation.classList.toggle('open');
})

let addClasses = ['shadow-2xl', 'bg-gray-50'];
if (!primaryNavigation.classList.contains('px-4')) {
  addClasses.push('px-4');
  addClasses.push('py-2');
}
