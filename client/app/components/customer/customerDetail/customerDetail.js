import angular from 'angular';
import uiRouter from 'angular-ui-router';
import customerDetailComponent from './customerDetail.component';

let customerDetailModule = angular.module('customerDetail', [
  uiRouter
])

.component('customerDetail', customerDetailComponent);

export default customerDetailModule;
