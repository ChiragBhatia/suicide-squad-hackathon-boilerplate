function FooterContentController($scope) {
	var self=this;
    this.lines = [
	    {
	        text1: 'Lorem ipsum',
	        text2: 'Lorem ipsum dolor sit Nesciunt itaque, alias possimus'
	    },
	    {
	      text1: 'Lorem ipsum',
	      text2: 'Lorem ipsum dolor sit Nesciunt itaque, alias possimus'  
	    },
	     {
	      text1: 'Lorem ipsum',
	      text2: 'Lorem ipsum dolor sit Nesciunt itaque, alias possimus'  
	    },
	     {
	      text1: 'Lorem ipsum',
	      text2: 'Lorem ipsum dolor sit Nesciunt itaque, alias possimus'  
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