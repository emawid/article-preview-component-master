'use strict';

const shareButtons = document.querySelectorAll('.share-btn');
console.log(shareButtons);

const smallScreenToast = document.querySelector('#mobile-toast');

const largeScreenToast = document.querySelector('#large-screen-toast');

const mediaQuery = window.matchMedia('(max-width: 767px)');

shareButtons.forEach(button => {
  button.addEventListener('click', () => {
    // mediaQuery.matches
    //   ? smallScreenToast.classList.toggle('hidden')
    //   : largeScreenToast.classList.toggle('hidden share-btn-toast-clicked');

    if (mediaQuery.matches) {
      smallScreenToast.classList.toggle('hidden');
    } else {
      largeScreenToast.classList.toggle('hidden');
      shareButtons[0].classList.toggle('share-btn-toast-clicked');
    }
  });
});
