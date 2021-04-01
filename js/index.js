// menu
const menuMobileDrop = document.querySelector('[data-menu-mobile]');
const menuButton = document.getElementById('top-menu-mobile');

window.addEventListener('click', (e) => {
  console.log(e.target);
});

function toggleMenuMobile() {
  if (menuMobileDrop.classList.contains('flex')) {
    menuMobileDrop.classList.add('none');
    menuMobileDrop.classList.remove('flex');
  } else {
    menuMobileDrop.classList.remove('none');
    menuMobileDrop.classList.add('flex');
  }
}

menuButton.addEventListener('click', toggleMenuMobile);
