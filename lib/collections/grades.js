Grades = new Mongo.Collection('grades');

Grades.allow({
    update: userAdmin,
    remove: userAdmin
});

Meteor.methods({
    'gradeInsert': function(gradeAttributes) {
        check(Meteor.userId(), String);
        check(gradeAttributes, {
            date: Date,
            pupilId: String,
            lessonId: String,
            value: String,
            description: String
        });

        var gradeId = Grades.insert(gradeAttributes);
        return {
            _id: gradeId
        };
    }
});