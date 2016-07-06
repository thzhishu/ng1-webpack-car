class LoginMinController {
  constructor($timeout) {
    "ngInject";
    this.oauth ={};
    this.$timeout =$timeout;
  }
  onLogin(){
    this.oauth.submited=1;
    this.$timeout(()=>{
      this.oauth.submited=0;
    }, 2000);
  }
}

export default LoginMinController;
