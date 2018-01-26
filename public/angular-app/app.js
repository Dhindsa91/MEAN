angular
  .module('meanhotel', [ngRoute])
  .config(config)
  .controller('HotelController', HotelsController);

function config($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'angular-app/hotels.html',
    controller: HotelsController,
    controllerAs: 'vm'
  });

  function HotelController() {
    var vm = this;
    vs.title = 'Mean Hotel App';
  }
}
