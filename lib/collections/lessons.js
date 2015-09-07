Lessons = new Mongo.Collection('lessons');

Lessons.allow({
  update: userAdmin,
  remove: userAdmin
});

Meteor.methods({
  'lessonInsert': function(lessonAttributes) {
    check(Meteor.userId(), String);
    check(lessonAttributes, {
      name: String
    });

    var lessonWithSameName = Lessons.findOne({name: lessonAttributes.name});
    if (lessonWithSameName) {
      return {
        lessonExists: true,
        _id: lessonWithSameName._id
      }
    }

    return {
      _id: Lessons.insert(lessonAttributes)
    };
  }
});
