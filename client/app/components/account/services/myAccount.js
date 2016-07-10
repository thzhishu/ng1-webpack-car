const URLS = require('URLS');

export default class myAccount {

  constructor($resource, $http, $q) {
      "ngInject";
    this.$resource = $resource;
    this.$q = $q;
    this.$http = $http;
    this.filteredList = this.list = [];
    console.log(URLS.BASE_URL);
    this.MyAccount = this.$resource('/user/:type', {type: '@type'}, {
        info: { 
            method: 'GET',
            params: { 
                type: 'info'
            }
        },
        changePwd: {
            method: 'POST',
            params: {
                type: 'changePwd'
            }
        },
        testInfo: {
            method: 'GET',
            url: './test/info.json'
        },
        testChangePwd: {
            url: './test/changePwd.json',
            method: 'POST',
            params: {
                type: 'changePwd'
            }
        },
    });
  }

  info() {
      
      return this.MyAccount.info();
  }


  changePwd(params) {
      const defer = this.$q.defer();
      this.MyAccount.changePwd({name: 'xjj'}, {age: 29}, function(data) {
          console.log('cheng gong')
          defer.resolve(data.data);
      }, function() {
          console.log('error...');
      });
      return defer.promise;
  }


  
  testInfo() {
      const defer = this.$q.defer();
      this.MyAccount.testInfo().$promise.then(function(data) {
          defer.resolve(data.data);
      });
      return defer.promise;
  }

  testChangePwd() {
      const defer = this.$q.defer();
      this.MyAccount.testChangePwd({name: 'csy'}, {age: 26}, function(data) {
          defer.resolve(data.data)
      }, function(data) {
          console.log('error: ', data);
          defer.reject(data);
      });
      return defer.promise;
  }

  

  allComplete() {
      //const defer1 = this.$q.defer();
      //const defer2 = this.$q.defer();
      return this.$q.all([this.testInfo(), this.testChangePwd()])
  }
 

}
