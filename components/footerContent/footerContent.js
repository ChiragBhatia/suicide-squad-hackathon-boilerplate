function FooterContentController($scope) {
	var self=this;
    this.data = [
	    {
	    heading: 'Lorem ipsum',
	    description: 'Lorem ipsum dolor sit Nesciunt itaque, alias possimus'
	    },
	    {
	    heading: 'Lorem ipsum',
	    description: 'Lorem ipsum dolor sit Nesciunt itaque, alias possimus'  
	    },
	    {
	    heading: 'Lorem ipsum',
	    description: 'Lorem ipsum dolor sit Nesciunt itaque, alias possimus'  
	    },
	    {
	    heading: 'Lorem ipsum',
	    description: 'Lorem ipsum dolor sit Nesciunt itaque, alias possimus'  
	    },

    ];
}


angular.module('ssApp').component('footerContent', {
  templateUrl: './components/footerContent/footerContent.html',
  controller: FooterContentController,
  controllerAs:'ctrl',
  bindings: {
  }
});