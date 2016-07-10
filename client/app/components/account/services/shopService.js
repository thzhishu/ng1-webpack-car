const URLS = require('URLS');

class shopService {
    constructor($resource, $q) {
        "ngInject";
        this.$resource = $resource;
        this.$q = $q;
        this.shop = this.$resource(URLS.BASE_URL + '/shop/:type', { type: '@type' }, {
            register: {
                method: 'POST',
                params: {
                    type: 'register'
                }
            },
            updateShop: {
                method: 'POST',
                params: {
                    type: 'update'
                }
            },
            deleteShop: {
                method: 'DELETE',
                params: {
                    type: 'delete'
                }
            },
            allShopes: {
                method: 'GET',
                params: {
                    type: 'myshop'
                }
            }

        });
    }

    getShopById(id) {
        const defer = this.$q.defer();
        this.shop.get({type: id}, function(data) {
            defer.resolve(data.data);
        }, function(data) {
            defer.reject(data);
        });

        return defer.promise;
    }

}

export default shopService;