function CarouselContentController() {
    var self=this;
    self.init = function(){
        $('#myCarousel').carousel({
            interval: false
        });
    };
}

angular.module('ssApp').component('carouselContent', {
  templateUrl: './components/carouselContent/carouselContent.html',
  controller: CarouselContentController,
  controllerAs: 'ctrl',
  bindings: {
  }
});