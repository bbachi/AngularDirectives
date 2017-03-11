// script.js

    // create the module and name it webAgentApp
        // also include ngRoute for all our routing needs
    var directiveExamp = angular.module('directiveExamp', ['ui.router','ngMessages', 'ngResource']);

    // configure our routes
    directiveExamp.config(function($stateProvider, $urlRouterProvider, $locationProvider,$resourceProvider) {
        //$locationProvider.hashPrefix('');
        // Don't strip trailing slashes from calculated URLs
        //$resourceProvider.defaults.stripTrailingSlashes = false;
        
        $urlRouterProvider.otherwise('/');
        
        $stateProvider
        
        .state('home', {
            url: '/',
            templateUrl: 'templates/home.html',
            controller  : 'homeCntrl'
        })
        
        $locationProvider.html5Mode(true);
        
    });


 directiveExamp.controller('homeCntrl', function($scope){
     
     console.log('in home controller:::');
     
 });
    
    
  directiveExamp.directive('deHeader', function () {
       
       return{
           template: "<div class='header'>This is header</div>",
           restrict: "A"
       }
  });

    
    

   