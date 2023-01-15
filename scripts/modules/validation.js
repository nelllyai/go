const inputPhoneNumber = document.querySelector('.call__input_phone');
const phoneMask = new Inputmask('+7 (999)-999-99-99');

phoneMask.mask(inputPhoneNumber);

const modalFormValidation = new JustValidate('.call');

modalFormValidation
  .addField('.call__input_name', [
    {
      rule: 'required',
      errorMessage: 'Укажите ваше имя'
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Имя должно быть не короче 2 символов'
    }
  ])
  .addField('.call__input_phone', [
    {
      rule: 'required',
      errorMessage: 'Укажите номер телефона'
    },
    {
      validator(value) {
        const tel = inputPhoneNumber.inputmask.unmaskedvalue();
        return !!(Number(tel) && tel.length === 10);
      },
      errorMessage: 'Телефон не корректен'
    }
  ])
  .onSuccess(() => {
    const overlay = document.querySelector('.overlay');
    overlay.querySelector('form').reset();
    overlay.classList.remove('overlay_active');
  });
  