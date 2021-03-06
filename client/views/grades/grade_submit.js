Template.gradeSubmit.helpers({
  lessons: function() {
    return Lessons.find({}, {sort: {name: 1}});
  },
  pupils: function () {
    return Pupils.find({}, {sort: {name: 1}});
  },
  currentPupil: function() {
    return Session.get('currentPupilId') == this._id;
  }
});

Template.gradeSubmit.events({
  'submit form': function(e,t) {
    e.preventDefault();
    var $date = $(e.target).find('#date'),
        $pupil = $(e.target).find('#pupil'),
        $lesson = $(e.target).find('#lesson'),
        $grade = $(e.target).find('#grade'),
        $not_closed = $(e.target).find('#not-closed'),
        $body = $(e.target).find('#body');
    debugger;
    var date = $date.val().split('.');
    var grade = {
        date: new Date(date[1]+'.'+date[0]+'.'+date[2]),
        pupilId: $pupil.val(),
        lessonId: $lesson.val(),
        value: $grade.val(),
        not_closed: $not_closed.prop('checked'),
        description: $body.val()
    };

    Meteor.call('gradeInsert', grade, function(error, result){
      // display the error to the user and abort
      if (error)
        return Materialize.toast(error.reason, 4000);
      else {
        $grade.val('');
        $body.val('');
        return Materialize.toast('Оценка добавлена', 4000);
      }
    });
  }
});

Template.gradeSubmit.onRendered(function(){
  $('select').material_select();
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
  $('.select-wrapper').css('padding-left', '3rem');
});
