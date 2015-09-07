Template.daysList.helpers({
  firstRow: function() {
    var date = moment().startOf('week').toDate(),
        days = Days.find({date: {$gt: date}}, {sort: {date: 1}}).fetch();
    return days.slice(0,3);
  },
  secondRow: function() {
    var date = moment().startOf('week').toDate(),
        days = Days.find({date: {$gt: date}}, {sort: {date: 1}}).fetch();
    return days.slice(3,6);
  },
  thirdRow: function() {
    var date = moment().startOf('week').toDate(),
        days = Days.find({date: {$gt: date}}, {sort: {date: 1}}).fetch();
    return days.slice(6,9);
  },
  fourthRow: function() {
    var date = moment().startOf('week').toDate(),
        days = Days.find({date: {$gt: date}}, {sort: {date: 1}}).fetch();
    return days.slice(9,12);
  }
});

Template.daysList.onRendered(function(){
  $(".collapsible").collapsible();
});
