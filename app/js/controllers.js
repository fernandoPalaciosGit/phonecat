'use strict';

/* 'PhoneListCtrl' Controller : servicios por parametros*/
var PhoneListControler = function($ctx, $ajax){
  //peticion ajax a Json
	$ajax.get('phones/phones.json').
		success(function(data){
			$ctx.phones = data;
			$ctx.parsePhones = data.splice(0, 5);
		}).
		error(function(error){
			console.info(error);
		});
	
  //valores predeterminados de filtros de ordenacion 'orderBy'
	$ctx.reverse = -1;
	$ctx.orderProp = 'age';
};

// funcion del controlador PhoneListCtrl
angular.module('phoneApp.controllers', []).
	controller('PhoneListCtrl', PhoneListControler);

//injecion de dependencias (servicios de angular)
PhoneListControler.$inject = ['$scope', '$http'];