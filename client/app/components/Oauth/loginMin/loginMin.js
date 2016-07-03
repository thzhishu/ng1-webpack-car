import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginMinComponent from './loginMin.component';

let loginMinModule = angular.module('loginMin', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('login-min', {
      url: '/login-min',
      template: '<login-min></login-min>'
    });
})

.component('loginMin', loginMinComponent);

export default loginMinModule;
