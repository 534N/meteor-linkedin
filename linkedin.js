Members = new Meteor.Collection("members");

if (Meteor.is_client) {

  Template.team.team = function() {
    return Members.find({}, {sort: {firstName: 1}});
  };

  // if (Meteor.is_server) {
  //   Meteor.startup(function () {
  //   });
  // }

}