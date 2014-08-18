'use strict';

/* Controllers */
var PhoneListCtrl = function($scope){
	$scope.phones = [
		{	name: 'nexusS',
			snippet: 'el mas rapido de los Nexus'},
		{	name: 'motorola XOOM con Wi-Fi',
			snippet: 'la siguiente generacion de tabletas'},
		{	name: 'motorola XOOM',
			snippet: 'la siguiente generacion de tabletas'}
	];

	$scope.totalPhones = $scope.phones.length;
};

angular.module('phoneApp.controllers', [])
  .controller('PhoneListCtrl', ['$scope', PhoneListCtrl]);