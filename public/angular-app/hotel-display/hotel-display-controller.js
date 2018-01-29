angular.module('meanhotel').controller('HotelsController', HotelsController);

function HotelController($route, $routeParams, hotelDataFactory) {
  var vm = this;
  var id = $routeParams.id;

  hotelDataFactory.hotelDisplay(id).then(function(response) {
    vm.hotel = response.data;
  });
}
