var date;
Template.dayEdit.helpers({
  date: function() {
    var day = this.date.getDate(),
        month = (this.date.getMonth()+1) < 10 ? '0' + (this.date.getMonth()+1) : this.date.getMonth()+ 1,
        year = this.date.getFullYear();
    date = day + '.' + month + '.' + year;
    return date;
  },
  homeworks: function() {
    return Homeworks.find({dayId: this._id}, {sort: {number: 1}});
  }
});

Template.dayEdit.events({
  'submit #day-edit': function(e) {
    e.preventDefault();
    var currentDayId = this._id;
    var date = $(e.target).find('#date').val().split('.'),
        dayProperties = {
          date: new Date(date[1]+'.'+date[0]+'.'+date[2]),
          event: $(e.target).find('#event').val()
        };
    Days.update(currentDayId, {$set: dayProperties}, function(error) {
        if (error)
          alert(error.reason);
        else
          Router.go('daysList');
    });
  },

  'click #delete': function(e) {
    e.preventDefault();
    if (confirm("Удалить этот день?")) {
      var currentDayId = this._id;
      Days.remove(currentDayId);
      Router.go('daysList');
    }
  },

  'submit #homework-submit': function(event, template) {
    event.preventDefault();
    var homework = {
      dayId: template.data._id,
      number: $(event.target).find('#number').val(),
      lessonId: $(event.target).find('#lesson').val(),
      body: $(event.target).find('#body').val()
    };
    Meteor.call('homeworkInsert', homework, function(error, result) {
      if (error)
      	return Materialize.toast(error.reason, 4000);
    });
  },
  
  'click #day-copy': function(event, template) {
    event.preventDefault();
    var homeworks = Homeworks.find({'dayId': this._id}).fetch();
		var date = template.find('#date-copy').value.split('.'),
        day = {
          date: new Date(date[1]+'.'+date[0]+'.'+date[2]),
          event: ''
        };
		Meteor.call('dayInsert', day, function(error, result) {
        if (error)
          return Materialize.toast(error.reason, 4000);
        if (result.dayExists)
          Materialize.toast('День с такой датой уже добавлен', 4000);
        else {
					_.each(homeworks, function(e, i){
						debugger;
						var homework = {
							dayId: result._id,
							number: e.number,
							lessonId: e.lessonId,
							body: ''
						};
						
						Meteor.call('homeworkInsert', homework, function(error, result) {
							if (error)
								return Materialize.toast(error.reason, 4000);
						});
					});
					Router.go('daysList');
					Materialize.toast('День добавлен', 4000);
				}
    });
		
  }
});

Template.dayEdit.onRendered(function(){
  $('.modal-trigger').leanModal();
  $(".collapsible").collapsible();
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
  }).val(date);
});
