Template.menuLateral.events({
	'click #sideBarMenuLateral .item': function () {
		$("#sideBarMenuLateral").sidebar("hide");
	},

	'click #lnkResponsables': function () {
		console.log("reponsables click View");
	}
});