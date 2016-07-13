import angular from 'angular';
import uiRouter from 'angular-ui-router';
import employeeListComponent from './employeeList.component';
import employeeServices from '../services/employee.service';


let employeeListModule = angular.module('employeeList', [
  uiRouter,
  employeeServices.name
])
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('employee-list', {
      url: '/employee-list',
      template: '<employee-list></employee-list>'
    });
})

.component('employeeList', employeeListComponent);

export default employeeListModule;
