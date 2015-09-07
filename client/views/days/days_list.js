Template.daysList.helpers({
  days: function(row) {
    return Days.find({}, {sort: {date: 1}});
  },
  firstRow: function() {
    var date = new Date(this.date);
    return date.getDay() < 4;
  },
  secondRow: function() {
    var date = new Date(this.date);
    return date.getDay() > 3;
  }
});

Template.daysList.onRendered(function(){
  $(".collapsible").collapsible();
});