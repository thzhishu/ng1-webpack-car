import angular from 'angular';
import uiRouter from 'angular-ui-router';
import customerEditComponent from './customerEdit.component';

let customerEditModule = angular.module('customerEdit', [
  uiRouter
])

.component('customerEdit', customerEditComponent);

export default customerEditModule;
