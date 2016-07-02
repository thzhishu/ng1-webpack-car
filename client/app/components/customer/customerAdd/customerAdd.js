import angular from 'angular';
import uiRouter from 'angular-ui-router';
import customerAddComponent from './customerAdd.component';

let customerAddModule = angular.module('customerAdd', [
  uiRouter
])

.component('customerAdd', customerAddComponent);

export default customerAddModule;
