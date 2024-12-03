#balance = 0; // private field for balance


// Method to perform operations
operation(transaction, amount) {
    if (amount > 0) {

        if (transaction === "deposit") {
            this.#balance += amount; // Deposit amount to balance

            console.log(`Deposit: ${amount}, New balance: ${this.#balance}`);

        } else if (transaction === "withdraw" && amount <= this.#balance) {
            this.#balance -= amount; // Withdraw amount from balance

            console.log(`Withdraw: ${amount}, New balance: ${this.#balance}`);
        } else {
            console.log("Insufficient funds or invalid operation.");
        }
        } else {
        console.log("Amount must be greater than zero.");
        }
}

// Method to display the current balance
showBalance() {
    console.log(`Current balance: ${this.#balance}`);
}
}