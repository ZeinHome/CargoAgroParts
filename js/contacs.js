(() => {
  const refs = {
    contactBtnRef: document.querySelector('[data-contact-button]'),
    mobileContactRef: document.querySelector('[data-contact]'),
  };

  refs.contactBtnRef.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.mobileContactRef.classList.toggle('is-open');
    document.body.classList.toggle('modal-open');
  }
})();
