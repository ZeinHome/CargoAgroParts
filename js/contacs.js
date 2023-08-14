(() => {
  const refs = {
    contactBtnRef: document.querySelector('[data-contact-button]'),
    mobileContactRef: document.querySelector('[data-contact]'),
    wrapperContact: document.querySelector('.wrapper-contact'),
  };

  refs.contactBtnRef.addEventListener('click', toggleModal);
  refs.wrapperContact.addEventListener('click', closeModal);

  function toggleModal() {
    refs.mobileContactRef.classList.toggle('is-open');
    document.body.classList.toggle('modal-open');
  }
})();
