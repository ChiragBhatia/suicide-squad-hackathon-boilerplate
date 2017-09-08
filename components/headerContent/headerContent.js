function HeaderContentController() {
	var self= this;
	self.activeItem = 'Home';
	self.navItems = ["Home","About Us","Discover","FAQ"];
	self.isActive = function(item){
		self.activeItem = item;
	}
}

angular.module('ssApp').component('headerContent', {
  templateUrl: './components/headerContent/headerContent.html',
  controller: HeaderContentController,
  controllerAs: 'headCtrl',
  bindings: {
  }
});