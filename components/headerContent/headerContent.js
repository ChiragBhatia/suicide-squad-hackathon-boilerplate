function HeaderContentController() {
	var self= this;
	self.activeItem = 'Home'; //Current active Nav

	//navItems array
	self.navItems = ["Home","About Us","Discover","FAQ"];

	//function to select current active nav
	self.isActive = function(item){
		self.activeItem = item;
	}

	//Function for header button click
	self.clicked = function(){
		alert("Button Clicked");
	}
}

angular.module('ssApp').component('headerContent', {
  templateUrl: './components/headerContent/headerContent.html',
  controller: HeaderContentController,
  controllerAs: 'headCtrl',
  bindings: {
  }
});