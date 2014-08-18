'use strict';

/* 'PhoneListCtrl' Controller : servicios por parametros*/
var PhoneListControler = function($ctx, $ajax){
  //peticion ajax a Json
	$ajax.get('phones/phones.json').
		success(function(data){
			$ctx.phones = data;
		}).
		error(function(error){
			console.info(error);
		});
	
  //valores predeterminados de filtros de ordenacion 'orderBy'
	$ctx.reverse = -1;
	$ctx.orderProp = 'age';
};

var PhoneDetailControler = function($ctx, $ajax, $urlParams){
	$ctx.phoneSelected = {
		url : 'phones/'+$urlParams.phoneId+'.json',
		mainImage : '',
		data : {} 
	};

	$ajax.get($ctx.phoneSelected.url).
		success(function(data){
			// devolvemos el articulo que coincida con el $routeParams
			$ctx.phoneSelected.data = data;
			$ctx.phoneSelected.mainImage = data.images[0];
		}).
		error(function(error){
			console.info(error);
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
PhoneListControler.$inject = ['$scope', '$http'];
PhoneDetailControler.$inject = ['$scope', '$http', '$routeParams'];