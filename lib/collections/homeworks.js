Homeworks = new Mongo.Collection('homeworks');

Homeworks.allow({
  update: userAdmin,
  remove: userAdmin
});

Meteor.methods({
  homeworkInsert: function(homeworkAttributes) {
    check(Meteor.userId(), String);
    check(homeworkAttributes, {
      dayId: String,
      number: String,
      lessonId: String,
      body: String
    });

    var homeworkId = Homeworks.insert(homeworkAttributes);
    return {
      _id: homeworkId
    };
  }
});
