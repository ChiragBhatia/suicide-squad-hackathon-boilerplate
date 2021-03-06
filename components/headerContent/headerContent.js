function HeaderContentController($location) {
	var self= this;
	self.activeItem = 'Home'; //Current active Nav

	//navItems array
	self.navItems = [
						{
							text:"Home",
						 	link:"#"
						},
						{
							text:"About Us",
							link:"./about-us.html"
						},
						{
							text:"Discover",
							link:"#"
						},
						{
							text:"FAQ",
							link:"#"
						}
					];

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