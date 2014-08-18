'use strict';


// declarar el modulo de nuestra aplicacion en varios niveles de dependencias
angular.module('phoneApp', [
  'ngRoute',
  'phoneApp.filters',
  'phoneApp.services',
  'phoneApp.directives',
  'phoneApp.controllers'
]);