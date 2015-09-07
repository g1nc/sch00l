Template.daySubmit.events({
  'submit form': function(e,t){
    e.preventDefault();
    var date = t.find('#date').value.split('.'),
        day = {
          date: new Date(date[1]+'.'+date[0]+'.'+date[2]),
          event: t.find('#event').value
        };

    Meteor.call('dayInsert', day, function(error, result) {
        if (error)
          return Materialize.toast(error.reason, 4000);
        if (result.dayExists)
          Materialize.toast('День с такой датой уже добавлен', 4000);
        else
          Materialize.toast('День добавлен', 4000);
    });
  }
});

Template.daySubmit.onRendered(function(){
  $('.datepicker').pickadate({
    selectMonths: true,// Creates a dropdown to control month
    selectYears: 2,// Creates a dropdown of 15 years to control year
    // The title label to use for the month nav buttons
    labelMonthNext: 'Следующий месяц',
    labelMonthPrev: 'Предыдущий',
    // The title label to use for the dropdown selectors
    labelMonthSelect: 'Выбор месяца',
    labelYearSelect: 'Выбор года',
    // Months and weekdays
    monthsFull: [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ],
    monthsShort: [ 'Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Нояб', 'Дек' ],
    weekdaysFull: [ 'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота' ],
    weekdaysShort: [ 'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб' ],
    // Materialize modified
    weekdaysLetter: [ 'В', 'П', 'В', 'С', 'Ч', 'П', 'С' ],
    // Today and clear
    today: 'Сегодня',
    clear: 'Очистить',
    close: 'Закрыть',
    // The format to show on the `input` element
    format: 'd.mm.yyyy'
  });
});
