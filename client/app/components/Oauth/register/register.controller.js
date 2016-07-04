class RegisterController {
  constructor($timeout,$state) {
    "ngInject";
    this.oauth ={};
    this.$timeout =$timeout;
    this.$state = $state;
  }
  onRegister(){
    this.oauth.submited=1;
    this.$timeout(()=>{
      this.oauth.submited=0;
      this.next();
    }, 2000);
  }
  next() {
    this.$state.go('init-store');
  }
}

export default RegisterController;
