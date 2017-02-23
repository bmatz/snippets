class Snippet {
	getAccounts(list) {
		if (list.length) {
			return ADExporter.getAccount(list[0])
			.then(result => {
				this.accounts = this.accounts.concat(result.body);
				return this.getAccounts(list.slice(1));
			});
		}
		return Promise.resolve();
	}

	static getAccount(id) {
		return get('/endpoint', { queryParams: { id } });
	}
}
