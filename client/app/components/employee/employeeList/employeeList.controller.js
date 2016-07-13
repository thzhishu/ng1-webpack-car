class EmployeeListController {
  constructor(employeeApi) {
    'ngInject';
    this.employeeApi = employeeApi;
    this.name = 'employeeList';
    this.employeeList = [];
    this.list();
  }

  onClose() {
    this.winShow = 0;
  }
  onDel() {
    this.winShow = 1;
  }
  list() {
    const list = this.employeeApi.list();
    const self = this;
    list.then(function(data) {
      console.log(data);
      self.employeeList = data;
    })
  }
}

export default EmployeeListController;
