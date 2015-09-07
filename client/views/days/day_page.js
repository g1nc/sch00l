Template.dayPage.helpers({
  date: function() {
    return this.date.getDate()+'.'+this.date.getMonth()+'.'+this.date.getFullYear();
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
