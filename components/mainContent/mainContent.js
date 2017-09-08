function MainContentController() {
  this.panels=
      [
        {"imageUrl":"./images/panel_image1.png","name":"Lorem ipsum","title":"FE Developer"},
        {"imageUrl":"./images/panel_image2.jpg","name":"Lorem ipsum","title":"Visual Developer"},
        {"imageUrl":"./images/panel_image3.png","name":"Lorem ipsum","title":"Visual Developer"},
        {"imageUrl":"./images/panel_image4.png","name":"Lorem ipsum","title":"FE Developer"}
      ];

}

angular.module('ssApp').component('mainContent', {
  templateUrl: './components/mainContent/mainContent.html',
  controller: MainContentController,
  controllerAs: 'mainctrl',
  bindings: {
  }
});