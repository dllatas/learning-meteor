// This code will run on the client and the server
Images = new Mongo.Collection("images");

if (Meteor.isClient) {
    // Template.images.helpers({images: img_data});
    //Template.images.helpers({images: Images.find({}, {sort:{createdOn:-1, rating:-1}})});
    Template.images.helpers({images: Images.find({}, {sort:{rating:-1}})});
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
      },
      "click .js-rate-image":function(event){
        var rating = $(event.currentTarget).data("userrating");
        //console.log(rating);
        var image_id = this.id;
        //console.log(image_id);
        Images.update({"_id":image_id}, {$set: {rating:rating}});
      },
      "click .js-show-image-form":function(event){
        $("#image_add_form").modal("show");
      }
    });

    Template.image_add_form.events({
      "submit .js-add-image":function(event){
        var img_src, img_alt;
        img_src = event.target.img_src.value;
        img_alt = event.target.img_alt.value;
        console.log("img_src "+img_src+" img_alt "+img_alt);
        Images.insert({
          img_src: img_src, 
          img_alt: img_alt, 
          createdOn: new Date()});
        return false; // Stops the default event 
      }
      });
}