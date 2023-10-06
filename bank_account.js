// Deklarasi variabel saldo
let saldo = parseFloat(localStorage.getItem("saldo")) || 0;

//fungsi tambahSaldo().
function tambahSaldo() {
  const tambahan = parseFloat(prompt("Masukkan jumlah saldo yang ingin ditambahkan:"));
  if (!isNaN(tambahan)) {
    saldo += tambahan;
    updateSaldoDisplay();
    alert("Saldo baru: " + saldo);

    // Simpan saldo ke localStorage setelah diperbarui
    localStorage.setItem("saldo", saldo);
  } else {
    alert("Input tidak valid. Saldo tidak berubah. Silakan masukkan angka.");
  }
}

//fungsi kurangiSaldo().
function kurangiSaldo() {
  const pengurangan = parseFloat(prompt("Masukkan jumlah saldo yang ingin dikurangkan:"));
  if (!isNaN(pengurangan)) {
    if (pengurangan <= saldo) {
      saldo -= pengurangan;
      updateSaldoDisplay();
      alert("Saldo baru: " + saldo);

      // Simpan saldo ke localStorage setelah diperbarui
      localStorage.setItem("saldo", saldo);
    } else {
      alert("Saldo tidak mencukupi untuk melakukan pengurangan.");
    }
  } else {
    alert("Input tidak valid. Saldo tidak berubah. Silakan masukkan angka.");
  }
}

// Fungsi untuk memperbarui tampilan saldo
function updateSaldoDisplay() {
  const saldoDisplayElement = document.getElementById("saldoDisplay");
  saldoDisplayElement.textContent = saldo; // Ubah teks pada elemen sesuai dengan nilai saldo.
}

// Panggil updateSaldoDisplay() saat halaman dimuat ulang
updateSaldoDisplay();
