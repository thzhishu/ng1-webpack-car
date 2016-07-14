class EmployeeAddController {
  constructor(employeeApi, $state) {
    'ngInject';
    this.employeeApi = employeeApi;
    this.$state = $state;
    this.name = 'employeeAdd';
    this.employee = {
      name: "",
      code: "",
      mobile: ""
    }
  }
  saveEmployee() {
    if(this.employee.name == "") {
      alert("名称不能为空");
      return;
    }
    if(this.employee.code == "") {
      alert("编号不能为空");
      return;
    }
    if(this.employee.mobile == "") {
      alert("手机不能为空");
      return;
    }
    return this.employeeApi.save(this.employee);
  }
  save() {
    const self = this;
    this.saveEmployee().then(function(data) {
      console.log(data);
      if(data.id) {
        alert("创建成功, id: " + data.id);
        self.$state.go('employee-list');
      }
    })
  }
  reset() {
    this.employee.name = "";
    this.employee.code = "";
    this.employee.mobile = "";
  }
  saveAndNew() {
    const saveResult = this.saveEmployee();
    const self = this;
    saveResult.then(function(data) {
      console.log(data);
      if(data.id) {
        alert("创建成功, id: " + data.id);
        self.reset();
      }
    }, function(data) {})
  }
}

export default EmployeeAddController;
