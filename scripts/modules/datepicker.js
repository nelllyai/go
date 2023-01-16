const selectDate = document.querySelector('.booking__select_date');

const picker = datepicker(selectDate, {
  disableYearOverlay: true,
  customMonths: ['Январь', 'Февраль', 'Март', 'Апрель',
    'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
    'Октябрь', 'Ноябрь', 'Декабрь'],
  customDays: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
  formatter: (input, date, instance) => {
    let day = date.getDate();
    day = day <= 9 ? '0' + day : day;
    let month = date.getMonth() + 1;
    month = month <= 9? '0' + month : month;
    input.value = day + '.' + month;
  }
});