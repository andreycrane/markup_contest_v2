(function () {
  //  your code here
  const topContainerEl = document.querySelector('.js-top-container');
  const menuBtnEl = document.querySelector('.js-menu-btn');

  menuBtnEl.addEventListener('click', () => {
    topContainerEl.classList.toggle('header-section__top-container--menu-open');
    document.body.classList.toggle('scroll-lock');
  });
})();
