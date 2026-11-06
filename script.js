const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#primary-nav');
const addressForm = document.querySelector('#address-form');
const addressInput = document.querySelector('#address');
const addressStatus = document.querySelector('#address-status');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  navigation.classList.toggle('open', !open);
});

navigation?.addEventListener('click', event => {
  if (event.target.closest('a')) {
    navigation.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }
});

addressForm?.addEventListener('submit', event => {
  event.preventDefault();
  const value = addressInput.value.trim();
  addressStatus.classList.remove('success', 'error');
  if (value.length < 4) {
    addressStatus.textContent = 'Enter at least four characters to test the form state.';
    addressStatus.classList.add('error');
    addressInput.focus();
    return;
  }
  addressStatus.textContent = `Demo state: “${value}” looks ready to check. No lookup was performed.`;
  addressStatus.classList.add('success');
});

