Template.daysList.helpers({
  days: function() {
    return Days.find({}, {sort: {date: 1}});
  }
});

Template.daysList.onRendered(function(){
  $(".collapsible").collapsible();
});