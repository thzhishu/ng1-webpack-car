import template from './customerDetail.html';
import controller from './customerDetail.controller';
import './customerDetail.scss';

let customerDetailComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default customerDetailComponent;
