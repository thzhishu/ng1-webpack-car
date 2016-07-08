import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import MyAccount from './account/myAccount/myAccount';
import ModifyPwd from './account/modifyPwd/modifyPwd';
import ModifyStore from './account/modifyStore/modifyStore';
import EmployeeList from './employee/employeeList/employeeList';
import EmployeeAdd from './employee/employeeAdd/employeeAdd';
import EmployeeEdit from './employee/employeeEdit/employeeEdit';
import Login from './Oauth/login/login';
import LoginMin from './Oauth/loginMin/loginMin';
import Register from './Oauth/register/register';
import ForgetPwd from './Oauth/forgetPwd/forgetPwd';
import InitStore from './Oauth/initStore/initStore';
import CustomerList from './customer/customerList/customerList';
import CustomerDetail from './customer/customerDetail/customerDetail';
import CustomerAdd from './customer/customerAdd/customerAdd';
import CustomerEdit from './customer/customerEdit/customerEdit';
import SatisfactionReport from './report/week/satisfaction/satisfaction';
import BusinessReport from './report/week/business/business';
import LineChart from './charts/lineChart/lineChart';


console.log(LineChart.name);
let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  MyAccount.name,
  ModifyPwd.name,
  ModifyStore.name,
  EmployeeList.name,
  EmployeeAdd.name,
  EmployeeEdit.name,
  Login.name,
  LoginMin.name,
  Register.name,
  ForgetPwd.name,
  InitStore.name,
  CustomerList.name,
  CustomerDetail.name,
  CustomerAdd.name,
  CustomerEdit.name,
  SatisfactionReport.name,
  BusinessReport.name,
  LineChart.name
]);

export default componentModule;
