Template.responsables.rendered = function () {
	$('.history.example .menu .item')
  	.tab({
    context : '.history.example',
    history : true
  	});

   console.log("hash: " + location.hash);
   $('.history.example .menu .item').removeClass("active");

};	