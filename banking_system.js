// Membuat Class Bank Account
class BankAccount {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    setTimeout(() => {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited: Rp.${amount}`);
      } else {
        console.log("Invalid deposit amount.");
      }
    }, 2000); // Menggunakan setTimeout untuk transaksi asynchronous (3 detik delay).
  }

  withdraw(amount) {
    setTimeout(() => {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn: Rp.${amount}`);
      } else {
        console.log("Invalid withdrawal amount or insufficient balance.");
      }
    }, 3000); // Menggunakan setTimeout untuk transaksi asynchronous (3 detik delay).
  }
}
