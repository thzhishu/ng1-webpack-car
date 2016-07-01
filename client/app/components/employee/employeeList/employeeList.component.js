import template from './employeeList.html';
import controller from './employeeList.controller';
import './employeeList.scss';

let employeeListComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default employeeListComponent;
