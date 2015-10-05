Template.homeworkSubmit.helpers({
  lessons: function() {
    return Lessons.find();
  }
});

Template.homeworkSubmit.events({
  'submit form': function(e,t) {
    e.preventDefault();
    var date = t.find('#date').value.split('.'),
        homework = {
          date: new Date(date[1]+'.'+date[0]+'.'+date[2]),
          number: t.find('#number').val(),
          lessonId: t.find('#lesson').val(),
          body: t.find('#body').val()
        };

    Meteor.call('homeworkInsert', homework, function(error, result) {
      if (error)
        return Materialize.toast(error.reason, 4000);
      else
        Materialize.toast('Задание добавлено', 4000);
    });
  }
});

Template.homeworkSubmit.onRendered(function() {
  $('.datepicker').pickadate({
    firstDay: 1,
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
