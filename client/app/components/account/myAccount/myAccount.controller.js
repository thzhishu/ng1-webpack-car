class MyAccountController {
	constructor(myAccount) {
		"ngInject";
		this.name = 'myAccount';
		this.myAccount = myAccount;
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
		const info = this.myAccount.testInfo()
	}
}

export default MyAccountController;
