OpcionesController = RouteController.extend({
	layoutTemplate : "layoutInterno"
});

Router.route("/responsables",function(){
	this.render("responsables");
},
{	
	controller: "OpcionesController",
	name: "responsablesRoute"
});