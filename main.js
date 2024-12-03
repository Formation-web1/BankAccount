import { BankAccount } from "./BankAccount.js";

let account = new BankAccount();
account.operation('deposit', 100);
account.operation('withdraw', 30);
account.showBalance();
