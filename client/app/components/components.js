import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import MyAccount from './myAccount/myAccount';
import ModifyPwd from './modifyPwd/modifyPwd';
import ModifyStore from './modifyStore/modifyStore';


let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  MyAccount.name,
  ModifyPwd.name,
  ModifyStore.name
]);

export default componentModule;
