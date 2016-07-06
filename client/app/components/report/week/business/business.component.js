import template from './business.html';
import controller from './business.controller';
import './business.scss';

let businessComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default businessComponent;
