(() => {
  const refs = {
    contactBtnRef: document.querySelector('[data-contact-button]'),
    closeModalBtn: document.querySelector('[data-contact-close]'),
    mobileContactRef: document.querySelector('[data-contact]'),
    // navigation: document.querySelector('.navigation'),
  };

  refs.contactBtnRef.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  //   refs.navigation.addEventListener('click', closeModal);

  function toggleModal() {
    refs.mobileContactRef.classList.toggle('is-open');
    document.body.classList.toggle('modal-open');
  }

  function closeModal(e) {
    if (e.target.nodeName !== 'A') {
      return;
    }
    refs.mobileMenuRef.classList.toggle('is-open');
    document.body.classList.toggle('modal-open');
  }
})();
