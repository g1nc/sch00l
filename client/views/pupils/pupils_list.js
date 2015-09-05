Template.pupilsList.helpers({
    pupils: function(){
        return Pupils.find();
    }
});