Meteor.startup(function(){
	var img_data = [
		{img_src: "universitario02.jpg", img_alt: "Universitario de Deportes !!"},
      	{img_src: "lolo01.jpg", img_alt: "Lolo Fernandez !!"},
      	{img_src: "rainer01.jpg", img_alt: "Rainer Torres !!"}];
	if (Images.find().count()==0){
		for (var i=0;i<img_data.length;i++) {
			Images.insert({img_src: img_data[i]["img_src"], img_alt: img_data[i]["img_alt"]})
		}
		console.log("startup.js says:" + Images.find().count());
	}
});