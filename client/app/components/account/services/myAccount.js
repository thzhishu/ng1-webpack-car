const URLS = require('URLS');
export default class myAccount {

  constructor($http) {
      "ngInject";

    this.$http = $http;
    this.filteredList = this.list = [];
    console.log(URLS.BASE_URL);
  }

  info() {
      this.$http.get(URLS.INFO).success(function(data) {

      })
  }
  
  testInfo() {
      return this.$http.get('info.json').success(function(data) {
          console.log(arguments);
      })
  }
 

}
