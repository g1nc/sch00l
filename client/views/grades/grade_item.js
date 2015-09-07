Template.gradeItem.helpers({
    lesson: function() {
       return Lessons.findOne({_id: this.lessonId});
    },
    date: function() {
        var date = this.date.getDate() < 10 ? '0' + this.date.getDate() : this.date.getDate(),
            month = (this.date.getMonth()+1) < 10 ? '0' + (this.date.getMonth()+1) : this.date.getMonth()+1,
            year = this.date.getFullYear();
        return date + '.' + month + '.' + year;
    },
    admin: function() {
        return Meteor.user() && Meteor.user().username == 'Supervisor';
    }
});

Template.gradeItem.events({
    'click .grade-edit': function(e) {
        e.preventDefault();
        Session.set('currentPupilId', this.pupilId);
        Session.set('currentLessonId', this.lessonId);
        Router.go('gradeEdit', {_id: this._id});
    },
    'click .grade-remove': function(e) {
        e.preventDefault();
        if (confirm("Удалить эту оценку?")) {
            Grades.remove(this._id);
        }
    }
});