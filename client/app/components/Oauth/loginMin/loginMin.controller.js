class LoginMinController {
  constructor($timeout, $state) {
    "ngInject";
    this.oauth = {};
    this.$timeout = $timeout;
    this.$state = $state;
  }
  onLogin() {
    this.oauth.submited = 1;
    if (this.oauth.code == 'next') {
      this.$timeout(() => {
        this.next();
      }, 800);
      return;
    }
    this.$timeout(() => {
      this.oauth.submited = 0;
    }, 2000);
  }

  next() {
    this.$state.go('my-account');
  }
}

export default LoginMinController;
