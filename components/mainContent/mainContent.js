function MainContentController() {
  this.panels=
      [
        {"imageUrl":"./images/panel_image1.png","name":"Lorem ipsum","title":"fe developer"},
        {"imageUrl":"./images/panel_image2.jpg","name":"Lorem ipsum","title":"visual developer"},
        {"imageUrl":"./images/panel_image3.png","name":"Lorem ipsum","title":"visual developer"},
        {"imageUrl":"./images/panel_image4.png","name":"Lorem ipsum","title":"fe developer"}
      ];

}

angular.module('ssApp').component('mainContent', {
  templateUrl: './components/mainContent/mainContent.html',
  controller: MainContentController,
  controllerAs: 'mainctrl',
  bindings: {
  }
});