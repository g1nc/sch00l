Template.homeworkItem.helpers({
    lesson: function(){
        return Lessons.findOne({_id: this.lessonId}).name;
    },
    admin: function(){
        return Meteor.user() && Meteor.user().username == 'Supervisor';
    }
});

Template.homeworkItem.events({
    'click .homework-remove': function(e,t){
        e.preventDefault();
        if (confirm("Удалить это задание?")) {
            Homeworks.remove(this._id);
        }
    },
    'click .homework-edit': function(e,t){
        e.preventDefault();
        Session.set('currentLessonId', this.lessonId);
        Router.go('homeworkEdit', {_id: this._id});
    }
});

Template.homeworkItem.onRendered(function () {
    $('.modal-trigger').leanModal();
});