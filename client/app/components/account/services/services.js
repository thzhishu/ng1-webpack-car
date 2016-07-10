import angular from 'angular';
import ngResource from 'angular-resource';
import myAccount from './myAccount';
import shopService from './shopService';

export default angular
  .module('app.services', ['ngResource'])
  .service({
    myAccount,
    shopService
  });