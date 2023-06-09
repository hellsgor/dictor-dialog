const passwordInputs = document.querySelectorAll('input[type=password]');
passwordInputs.forEach((input) => {
  input
    .closest('.input')
    .querySelector('.input__password-icons')
    .addEventListener('click', () => {
      if (input.type === 'password') {
        input.type = 'text';
      } else if (input.type === 'text') {
        input.type = 'password';
      }
    });
});
