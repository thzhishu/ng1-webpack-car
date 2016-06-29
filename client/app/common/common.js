import angular from 'angular';
import Navbar from './navbar/navbar';
import Menus from './menus/menus';
//import Hero from './hero/hero';
import User from './user/user';

let commonModule = angular.module('app.common', [
  Navbar.name,
  //Hero.name,
  User.name,
  Menus.name
]);

export default commonModule;
