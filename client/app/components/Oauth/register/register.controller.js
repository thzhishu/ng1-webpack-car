class RegisterController {
  constructor($timeout) {
    "ngInject";
    this.oauth ={};
    this.$timeout =$timeout;
  }
  onRegister(){
    this.oauth.submited=1;
    this.$timeout(()=>{
      this.oauth.submited=0;
    }, 2000);
  }
}

export default RegisterController;
