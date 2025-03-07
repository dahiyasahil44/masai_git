// Create a closure that represents a bank account. Implement a function createBankAccount that initializes an account 
// with a balance (input by the user) and returns methods to deposit, withdraw, and getBalance. Ensure that the balance 
// cannot be accessed or modified directly from outside the closure.

// deposit(amount): Increases the balance by the given amount.
// withdraw(amount): Decreases the balance by the given amount, if there are sufficient funds.
// getBalance(): Returns the current balance.


function createBankAccount(n){
    let balance = n;

    return {
        deposit: (amt)=> {
            return balance+=amt;
        },
        withdraw: (amt)=> {
            return (amt<=balance)?balance=balance-amt:"Insufficient Balance";
        },
        getBalance: ()=> {
            return balance;
        }
    }
}

const bank = createBankAccount(1000);
console.log(bank.deposit(100))
console.log(bank.withdraw(456))
console.log(bank.deposit(87))
console.log(bank.getBalance())

console.log(bank.withdraw(2056))

