import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import MyAccount from './account/myAccount/myAccount';
import ModifyPwd from './account/modifyPwd/modifyPwd';
import ModifyStore from './account/modifyStore/modifyStore';
import EmployeeList from './employee/employeeList/employeeList';
import EmployeeAdd from './employee/employeeAdd/employeeAdd';
import EmployeeEdit from './employee/employeeEdit/employeeEdit';


let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  MyAccount.name,
  ModifyPwd.name,
  ModifyStore.name,
  EmployeeList.name
]);

export default componentModule;
