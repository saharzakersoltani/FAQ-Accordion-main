import iconMinus from 'url:../image/icon-minus.svg';
import iconPlus from 'url:../image/icon-plus.svg';

const main = document.querySelector('main');

main.addEventListener('click', function (e) {
  e.preventDefault();
  const btn = e.target.closest('button');

  if (!btn) return;

  const accordion = btn.closest('.accordion');
  console.log(accordion);

  const text = accordion.querySelector('.display');
  text.classList.toggle('hide');

  // Change icon
  const icon = btn.querySelector('img');
  if (text.classList.contains('hide')) {
    icon.src = `${iconPlus}`;
    icon.alt = 'icon plus';
  } else {
    icon.src = `${iconMinus}`;
    icon.alt = 'icon minus';
  }
});
