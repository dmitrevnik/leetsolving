class Bank {
    private bal: number[];
    private n: number;

    constructor(balance: number[]) {
        this.bal = balance;
        this.n = balance.length;
    }

    private valid(acc: number): boolean {
        return acc > 0 && acc <= this.n;
    }

    transfer(account1: number, account2: number, money: number): boolean {
        if (!this.valid(account1) || !this.valid(account2) || this.bal[account1 - 1] < money)
            return false;
        this.bal[account1 - 1] -= money;
        this.bal[account2 - 1] += money;
        return true;
    }

    deposit(account: number, money: number): boolean {
        if (!this.valid(account)) return false;
        this.bal[account - 1] += money;
        return true;
    }

    withdraw(account: number, money: number): boolean {
        if (!this.valid(account) || this.bal[account - 1] < money)
            return false;
        this.bal[account - 1] -= money;
        return true;
    }
}
