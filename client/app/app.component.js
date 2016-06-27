import template from './app.html';
require("!style!css!sass!./app.scss");

let appComponent = {
  template,
  restrict: 'E'
};

export default appComponent;
