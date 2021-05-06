/* Login Modal */

const loginBtn = document.querySelector('[data-modal]');
const body = document.body;
const modalClose = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');

loginBtn.addEventListener('click', event => {
  let $this = event.currentTarget;
  let modalId = $this.getAttribute('data-modal');
  let modal = document.getElementById(modalId);
  let modalContent = modal.querySelector('.modal__content');

  modalContent.addEventListener('click', event => {
    event.stopPropagation();
  })

  modal.classList.remove('is-hidden');
  body.classList.add('no-scroll');

  setTimeout(() => {
    modalContent.style.transform = 'none';
    modalContent.style.opacity = '1';
  }, 1);

})

modalClose.addEventListener('click', event => {
  let currentModal = event.currentTarget.closest('.modal');

  closeModal(currentModal);
})


modal.addEventListener('click', event => {
  let currentModal = event.target;

  closeModal(currentModal);
})

function closeModal(modal) {
  let modalContent = modal.querySelector('.modal__content');
  modalContent.removeAttribute('style');

  setTimeout(() => {
    modal.classList.add('is-hidden');
    body.classList.remove('no-scroll');
  }, 200)
}

