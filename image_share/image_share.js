// This code will run on the client and the server
Images = new Mongo.Collection("images");

if (Meteor.isClient) {
    // Template.images.helpers({images: img_data});
    Template.images.helpers({images: Images.find()});
    // Add a listener
    Template.images.events({
      "click .js-image":function(event){
        // alert("m'axima expresion!");
        // console.log(event);
        $(event.target).css("width","50px");
      },
      "click .js-del-image":function(event){
        var image_id = this._id;
        $("#"+image_id).hide("slow", function(){
          Images.remove({"_id": image_id});  
        });
      }
    });
}