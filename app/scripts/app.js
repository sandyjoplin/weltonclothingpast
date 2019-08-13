'use strict';

/**
 * @ngdoc overview
 * @name clothingApp
 * @description
 * # clothingApp
 *
 * Main module of the application.
 */
angular
  .module('clothingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/camisaTela', {
        templateUrl: 'views/camisatela.html',
        controller: 'CamisatelaCtrl',
        controllerAs: 'camisaTela'
      })
      .when('/camisaCuello', {
        templateUrl: 'views/camisacuello.html',
        controller: 'CamisacuelloCtrl',
        controllerAs: 'camisaCuello'
      })
      .when('/camisaAletilla', {
        templateUrl: 'views/camisaaletilla.html',
        controller: 'CamisaaletillaCtrl',
        controllerAs: 'camisaAletilla'
      })
      .when('/camisaPunos', {
        templateUrl: 'views/camisapunos.html',
        controller: 'CamisapunosCtrl',
        controllerAs: 'camisaPunos'
      })
      .when('/camisaEspalda', {
        templateUrl: 'views/camisaespalda.html',
        controller: 'CamisaespaldaCtrl',
        controllerAs: 'camisaEspalda'
      })
      .when('/camisaBolsas', {
        templateUrl: 'views/camisabolsas.html',
        controller: 'CamisabolsasCtrl',
        controllerAs: 'camisaBolsas'
      })
      .when('/camisaIniciales', {
        templateUrl: 'views/camisainiciales.html',
        controller: 'CamisainicialesCtrl',
        controllerAs: 'camisaIniciales'
      })
      .when('/preferencias', {
        templateUrl: 'views/preferencias.html',
        controller: 'PreferenciasCtrl',
        controllerAs: 'preferencias'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
