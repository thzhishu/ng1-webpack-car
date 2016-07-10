class MyAccountController {
	constructor(myAccount, shopService) {
		"ngInject";
		this.name = 'myAccount';
		this.myAccount = myAccount;
		this.shopService = shopService;
		this.accountBaseInfo = {
			version: '免费版',
			stores: [
				{
					id: 1,
					name: '徐汇区肇嘉浜路店'
				},{
					id: 2,
					name: '人民广场店'
				}
			],
			user: {
				name: '18098776787'
			}

		}
		this.init();
		console.log(this.myAccount);
	}
	init () {
		let info = this.myAccount.testInfo();
		const self = this;
		console.log(info);
		console.log(info.data);
		info.then(function(data) {
			console.log('data..')
			console.log(data);
			self.accountBaseInfo = data;
		})
		this.myAccount.allComplete().then(function(data) {
			console.log('data: ', data);
		}, function(data) {
			console.log('err data: ', data);
		});
		
		
	}
}

export default MyAccountController;
