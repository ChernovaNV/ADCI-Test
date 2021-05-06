/* Infobox Show */

const infoBnt = document.querySelector('.infobox__btn');


infoBnt.addEventListener('click', event => {
  const parentInfo = event.currentTarget.closest('.infobox');

  parentInfo.classList.toggle('infobox--open');
  console.log(parentInfo);
})

