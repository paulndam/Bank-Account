/** @format */

export class BankAccount {
	constructor() {
		this._balance = 0;
		this.acOpened = false;
	}

	open() {
		if (this.acOpened === true) {
			throw new ValueError();
		} else if (this.acOpened === false) {
			this.acOpened = true;
			this._balance = 0;
		}
	}

	close() {
		if (this.acOpened === true) {
			this.acOpened = false;
		} else {
			throw new ValueError();
		}
	}

	deposit(balance) {
		if (this.acOpened === true && balance >= 0) {
			this._balance += balance;
		} else {
			throw new ValueError();
		}
	}

	withdraw(balance) {
		if (this.acOpened === true && this._balance >= balance && balance >= 0) {
			this._balance -= balance;
		} else {
			throw new ValueError();
		}
	}

	get balance() {
		if (this.acOpened === true) {
			return this._balance;
		} else if (this.acOpened === false) {
			throw new ValueError();
		}
	}
}

export class ValueError extends Error {
	constructor() {
		super("Bank account error");
	}
}
