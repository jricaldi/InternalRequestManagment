Router.configure({
});


Router.route("/",function(){
	this.layout("layoutInterno");
},
{	
	name: "indexRoute"
});