Template.daysList.helpers({
  firstRow: function() {
    var date = moment().startOf('week').toDate(),
        days = Days.find({date: {$gt: date}}, {sort: {date: 1}}).fetch();
    return days.slice(0,3);
  },
  secondRow: function() {
    var date = moment().startOf('week').toDate(),
        days = Days.find({date: {$gt: date}}, {sort: {date: 1}}).fetch();
    return days.slice(3,5);
  },
  thirdRow: function() {
    var date = moment().startOf('week').toDate(),
        days = Days.find({date: {$gt: date}}, {sort: {date: 1}}).fetch();
    return days.slice(5,8);
  },
  fourthRow: function() {
    var date = moment().startOf('week').toDate(),
        days = Days.find({date: {$gt: date}}, {sort: {date: 1}}).fetch();
    return days.slice(8,11);
  }
});

Template.daysList.onRendered(function(){
  $(".collapsible").collapsible();
});
