if (Meteor.isClient) {
  var today = {
    hour : new Date(), 
  };
  // Template.time.helpers({time: today});
  Template.time.helpers(today);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
