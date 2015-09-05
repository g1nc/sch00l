Pupils = new Mongo.Collection('pupils');

Meteor.methods({
   pupilInsert: function (pupilAttributes) {
       check(Meteor.userId(), String);
       check(pupilAttributes, {
           name: String
       });

       var pupilWithSameName = Pupils.findOne({name: pupilAttributes.name});
       if (pupilWithSameName) {
           return {
               dayExists: true,
               _id: pupilWithSameName._id
           }
       }

       return {
           _id: Pupils.insert(pupilAttributes)
       };
   }
});