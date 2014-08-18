'use strict';

var PhoneListControler = function($ctx, $ajax, phoneRest){
	//API RESTfull
	$ctx.phones = phoneRest.getAllPhones();

   //valores predeterminados de filtros de ordenacion 'orderBy'
	$ctx.reverse = -1;
	$ctx.orderProp = 'age';
};

var PhoneDetailControler = function($ctx, $ajax, $urlParams, phoneRest){
	$ctx.phoneSelected = {
		mainImage : '',
		data : {} 
	};

	//API RESTfull
	$ctx.phoneSelected.data = phoneRest.get( {phoneId: $urlParams.phoneId}, function (data){
		$ctx.phoneSelected.mainImage = data.images[0];
	});

	$ctx.setMainImage = function (imageUrl){
		$ctx.phoneSelected.mainImage = imageUrl;
	};

};

// funcion del controlador PhoneListCtrl
angular.module('phoneApp.controllers', []).
	controller('PhoneListCtrl', PhoneListControler).
	controller('PhoneDetailCtrl', PhoneDetailControler);

//injecion de dependencias (servicios de angular)
PhoneListControler.$inject = ['$scope', '$http', 'PhoneRestFullFact'];
PhoneDetailControler.$inject = ['$scope', '$http', '$routeParams', 'PhoneRestFullFact'];