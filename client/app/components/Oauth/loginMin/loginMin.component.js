import template from './loginMin.html';
import controller from './loginMin.controller';
import './loginMin.scss';

let loginMinComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default loginMinComponent;
