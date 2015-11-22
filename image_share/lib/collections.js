// This code will run on the client and the server
Images = new Mongo.Collection("images");

// Set up security on Images collection
Images.allow({
  insert:function(userId, doc){
    console.log("testing security on image insert");
    if (Meteor.user()){ // check if user is looged in 
      //console.log(doc);
      // Force the image to be owned by the user
      // doc.createdBy = userId;
      // THe user is messing about its ID
      if (userId != doc.createdBy) {
        return false;
      }
      else {
        // THe user is looged in, and the image has the correct user id 
        return true;    
      }
    }
    else {
      return false;
    }
    // if false user can't make it!!
    //return false;
  },
  remove:function(userId, doc){
    return true;
  }
})