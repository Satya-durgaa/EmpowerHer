function createBankAccount() {
  let balance = 0;
  let transactions = [];

  return {
    deposit(amount) {
      if (typeof amount !== "number" || amount <= 0) {
        return "Error: Deposit amount must be positive";
      }
      balance += amount;
      transactions.push({ type: "deposit", amount });
      return `Deposited ${amount}`;
    },

    withdraw(amount) {
      if (typeof amount !== "number" || amount <= 0) {
        return "Error: Withdrawal amount must be positive";
      }
      if (amount > balance) {
        return "Error: Insufficient balance";
      }
      balance -= amount;
      transactions.push({ type: "withdraw", amount });
      return `Withdrawn ${amount}`;
    },

    getBalance() {
      return balance;
    },

    getTransactionHistory() {
      return [...transactions];
    }
  };
}