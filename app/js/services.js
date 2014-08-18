'use strict';

/* API RESTfull
	Para mantener una API, hay que preparar las url de recursos;
	La informacion en JSON de cada articulo debe identificarse por su nombre)
*/

var PhoneRestFullFactory = function ($resource){
	return $resource('phones/:phoneId.json', {}, {
		//query que ejecuta peticion de tipo GET hacia 'phones/phones.json'
		getAllPhones: { method: 'GET', params: {phoneId: 'phones'}, isArray: true }
	});
}

angular.module('phoneApp.services', ['ngResource']).
// version del proyecto
	value('version', '0.1').
// factoria de servicio RESTfull: acceder a todos los datos del catalogo
	factory('PhoneRestFullFact', ['$resource', PhoneRestFullFactory]);
