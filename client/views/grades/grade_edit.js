var date;
Template.gradeEdit.helpers({
  date: function() {
    var day = this.date.getDate(),
        month = (this.date.getMonth()+1) < 10 ? '0' + (this.date.getMonth()+1) : this.date.getMonth()+ 1,
        year = this.date.getFullYear();
    date = day + '.' + month + '.' + year;
    return date;
  },
  lessons: function() {
    return Lessons.find({}, {sort: {name: 1}});
  },
  pupils: function () {
    return Pupils.find({}, {sort: {name: 1}});
  },
  currentPupil: function() {
    return Session.get('currentPupilId') == this._id;
  },
  currentLesson: function() {
    return Session.get('currentLessonId') == this._id
  }
});

Template.gradeEdit.events({
  'submit form': function(e, t) {
    e.preventDefault();
    var $pupil = $(e.target).find('#pupil'),
        $lesson = $(e.target).find('#lesson'),
        $grade = $(e.target).find('#grade'),
        $body = $(e.target).find('#body');
    var date = t.find('#date').value.split('.');
    var gradeProperties = {
        date: new Date(date[1]+'.'+date[0]+'.'+date[2]),
        pupilId: $pupil.val(),
        lessonId: $lesson.val(),
        value: $grade.val(),
        description: $body.val()
    };
    Grades.update(this._id, {$set: gradeProperties}, function(error) {
      if (error)
        alert(error.reason);
      else
        Router.go('pupilPage', {_id: Session.get('currentPupilId')});
    });
  }
});

Template.gradeEdit.onRendered(function(){
  $('select').material_select();
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
  }).val(date);
  $('.select-wrapper').css('padding-left', '3rem');
});
