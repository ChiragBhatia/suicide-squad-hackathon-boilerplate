function MainContentController() {
  this.panels=
      [
        {"name":"Lorem ipsum","title":"fe developer"},
        {"name":"Lorem ipsum","title":"visual developer"},
        {"name":"Lorem ipsum","title":"visual developer"},
        {"name":"Lorem ipsum","title":"fe developer"}
      ];

}

angular.module('ssApp').component('mainContent', {
  templateUrl: './components/mainContent/mainContent.html',
  controller: MainContentController,
  controllerAs: 'mainctrl',
  bindings: {
  }
});