Template.homeworkItem.helpers({
    lesson: function(){
        return Lessons.findOne({_id: this.lessonId}).name;
    },
    admin: function(){
        return Meteor.user().username == 'Supervisor';
    }
});

Template.homeworkItem.events({
    'click .homework-remove': function(e,t){
        e.preventDefault();
        if (confirm("Удалить это задание?")) {
            var currentHomeworkId = this._id;
            Homeworks.remove(currentHomeworkId);
        }
    }
});

Template.homeworkItem.onRendered(function () {
    $('.modal-trigger').leanModal();
});