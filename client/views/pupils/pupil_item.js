Template.pupilItem.helpers({
    admin: function(){
        return Meteor.user().username == 'Supervisor';
    }
});


Template.pupilItem.events({
    'click .pupil-remove': function(e,t){
        e.preventDefault();
        if (confirm("Удалить это задание?")) {
            var currentHomeworkId = this._id;
            Homeworks.remove(currentHomeworkId);
        }
    }
});