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
		phoneUrl : 'phones/'+$urlParams.phoneId+'.json',
		phoneData : {} 
	};

	$ajax.get($ctx.phoneSelected.phoneUrl).
		success(function(data){
			// devolvemos el articulo que coincida con el $routeParams
			$ctx.phoneSelected.phoneData = data;
		}).
		error(function(error){
			console.info(error);
		});

};

// funcion del controlador PhoneListCtrl
angular.module('phoneApp.controllers', []).
	controller('PhoneListCtrl', PhoneListControler).
	controller('PhoneDetailCtrl', PhoneDetailControler);

//injecion de dependencias (servicios de angular)
PhoneListControler.$inject = ['$scope', '$http'];
PhoneDetailControler.$inject = ['$scope', '$http', '$routeParams'];