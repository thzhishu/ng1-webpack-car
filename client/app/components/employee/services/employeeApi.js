const URLS = require('URLS');

class employeeApi {
    constructor ($q, $resource) {
        'ngInject';
        this.$q = $q;
        this.$resource = $resource;
        this.employee = this.$resource(URLS.BASE_URL + '/employee/:type', {type: '@type'}, {
            list: {
                method: 'GET',
                params: {
                    type: 'list'
                }
            },
            save: {
                method: 'POST',
                params: {
                    type: 'save'
                }
                
            },
            update: {
                method: 'POST',
                params: {
                    type: 'update'
                }
                
            },
            delete: {
                method: 'DELETE',
                params: {
                    type: 'delete'
                }
                
            },
            getById: {
                method: 'GET'
            }
        });
    }

    //获取全部员工
    list () {
        const defer = this.$q.defer();
        this.employee.list(function(data) {
            console.log(data.data);
            defer.resolve(data.data);
        }, function(data) {
            defer.reject(data);
        })

        return defer.promise;
    }
    //添加新员工
    save (obj) {
        const defer = this.$q.defer();
        const employeeObj = {
            name: obj.name,
            code: obj.code,
            mobile: obj.mobile
        }
        this.employee.save(employeeObj, function(data) {
            defer.resolve(data.data);
        }, function(data) {
            defer.reject(data);
        })

        return defer.promise;
    }
    //更新员工
    update (obj) {
        const defer = this.$q.defer();
        const employeeObj = {
            id: obj.id,
            name: obj.name,
            code: obj.code,
            mobile: obj.mobile
        }
        this.employee.update(employeeObj, function(data) {
            defer.resolve(data.data);
        }, function(data) {
            defer.reject(data);
        })

        return defer.promise;
    }
    //删除员工
    delete (id) {
        const defer = this.$q.defer();
        
        this.employee.delete({id: id}, function(data) {
            defer.resolve(data.data);
        }, function(data) {
            defer.reject(data);
        })

        return defer.promise;
    }


}

export default employeeApi;