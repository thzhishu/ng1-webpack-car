import angular from 'angular';

import register from './user.service';

export default angular
  .module('oauth.services', [])
  .service({
    register
  });
