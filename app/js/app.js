'use strict';


window.angular.
// declarar el modulo de nuestra aplicacion en varios niveles de dependencias
	module('phoneApp', [
		'ngRoute',
		'phoneApp.filters',
		'phoneApp.services',
		'phoneApp.directives',
		'phoneApp.controllers',
		'phoneApp.animations'
	]).
//configuracion de vistas (solo se tiene acceso al $rootProvider desde el config)
	config(['$routeProvider', function($routeProvider){
		$routeProvider.
			when('/phones', {
				templateUrl: 'partials/phone-list.html',
				controller: 'PhoneListCtrl'
			}).
// a traves de la url se pasara atributos (/:phoneId) al controlador (PhoneDetailCtrl) por medio del servicio $routeParams
			when('/phones/:phoneId', {
				templateUrl: 'partials/phone-detail.html',
				controller: 'PhoneDetailCtrl'
			}).
			otherwise({redirectTo: '/phones'});
	}]);
