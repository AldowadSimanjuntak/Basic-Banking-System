class BankAccount {
    constructor() {
      this.balance = parseFloat(localStorage.getItem("saldo")) || 0;
    }
  
    deposit(amount) {
      const tambahan = parseFloat(amount);
      if (!isNaN(tambahan) && tambahan > 0) {
        alert("Tunggu sebentar, sedang update saldo..."); // Alert untuk informasi ke user sedang update saldo
        setTimeout(() => {
          this.balance += tambahan;
          this.updateSaldoDisplay();
          alert("Saldo baru Anda adalah : Rp. " + this.balance);
          localStorage.setItem("saldo", this.balance);
        }, 3000); // Menggunakan setTimeout untuk mensimulasikan operasi transaksi yang asynchronous (3 detik delay).
      } else {
        alert("Input tidak valid. Saldo tidak berubah. Silakan masukkan angka.");
      }
    }
  
    withdraw(amount) {
      const pengurangan = parseFloat(amount);
      if (!isNaN(pengurangan) && pengurangan > 0 && pengurangan <= this.balance) {
        alert("Tunggu sebentar, sedang update saldo..."); // Alert untuk informasi ke user sedang update saldo
        setTimeout(() => {
          this.balance -= pengurangan;
          this.updateSaldoDisplay();
          alert("Saldo baru Anda adalah : Rp. " + this.balance);
          localStorage.setItem("saldo", this.balance);
        }, 3000); // Menggunakan setTimeout untuk mensimulasikan operasi transaksi yang asynchronous (3 detik delay).
      } else {
        alert("Input tidak valid atau saldo tidak mencukupi untuk pengurangan.");
      }
    }
  
    updateSaldoDisplay() {
      const saldoDisplayElement = document.getElementById("saldoDisplay");
      saldoDisplayElement.textContent = this.balance;
    }
  }
  
  // Membuat instance BankAccount
  const bankAccount = new BankAccount();
