Template.manage.helpers({
  days: function() {
    return Days.find({}, {sort: {date: -1}});
  },
  date: function() {
    var date = this.date.getDate() < 10 ? '0' + this.date.getDate() : this.date.getDate(),
        month = (this.date.getMonth()+1) < 10 ? '0' + (this.date.getMonth()+1) : this.date.getMonth()+1,
        year = this.date.getFullYear();
    return date + '.' + month + '.' + year;
  },
  day: function() {
    var day;
    switch (this.date.getDay()) {
      case 1 : day = 'Понедельник'; break;
      case 2 : day = 'Вторник'; break;
      case 3 : day = 'Среда'; break;
      case 4 : day = 'Четверг'; break;
      case 5 : day = 'Пятница'; break;
      case 6 : day = 'Суббота'; break;
    }
    return day;
  }
});
