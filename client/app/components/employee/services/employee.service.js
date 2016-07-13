import angular from 'angular';
import ngResource from 'angular-resource';
import employeeApi from './employeeApi';

export default angular
    .module('app.services.employee', ['ngResource'])
    .service({
        employeeApi
    })