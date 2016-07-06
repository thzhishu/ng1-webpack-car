import template from './satisfaction.html';
import controller from './satisfaction.controller';
import './satisfaction.scss';

let satisfactionComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default satisfactionComponent;
