function createBankAccount() {
    let balance = 0;                    // private
    let transactionHistory = [];        // private

    return {
        deposit(amount) {
            if (amount > 0) {
                balance += amount;
                transactionHistory.push(`Deposited: ${amount}`);
                console.log(`Deposited: ${amount}`);
            }
        },

        withdraw(amount) {
            if (amount > balance) {
                console.log("Insufficient balance");
                transactionHistory.push(`Failed Withdrawal: ${amount}`);
            } else {
                balance -= amount;
                transactionHistory.push(`Withdrawn: ${amount}`);
                console.log(`Withdrawn: ${amount}`);
            }
        },

        getBalance() {
            return balance;
        },

        getHistory() {
            return transactionHistory;
        }
    };
}
const account = createBankAccount();
account.deposit(300);
account.withdraw(100);
console.log(account.getHistory());
console.log(account.transactionHistory); // undefined
