Template.pupilsList.helpers({
  pupils: function(){
    return Pupils.find({}, {sort: {name: 1}});
  }
});
