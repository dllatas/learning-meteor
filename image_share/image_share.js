if (Meteor.isClient) {
    var img_data = [
      {
        img_src: "universitario02.jpg",
        img_alt: "Universitario de Deportes !!"
      },
      {
        img_src: "lolo01.jpg",
        img_alt: "Lolo Fernandez !!"
      },
      {
        img_src: "rainer01.jpg",
        img_alt: "Rainer Torres !!"
      }
    ];
    Template.images.helpers({images: img_data});
    // Add a listener
    Template.images.events({
      "click .js-image":function(event){
        // alert("m'axima expresion!");
        console.log(event);
        $(event.target).css("width","50px");
      }
    });
}

if (Meteor.isServer) {
    console.log("i am the server");
}
