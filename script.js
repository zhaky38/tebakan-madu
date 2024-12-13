// Daftar nama yang bisa ditebak
const daftarNama = ["Akasia", "Kaliandra", "Randu", "Kopi", "Karet"];

// Pilih nama secara acak dari daftar
const namaRahasia = daftarNama[Math.floor(Math.random() * daftarNama.length)].toLowerCase();

// Inisialisasi skor dan jumlah kesalahan
let skor = 0;
let jumlahSalah = 0;

function checkGuess() {
  // Ambil input tebakan dari user
  const tebakan = document.getElementById("tebakan").value.trim().toLowerCase();

  // Cek jika tebakan kosong
  if (!tebakan) {
    alert("Masukkan tebakan!");
    return;
  }

  // Reset feedback dan pesan game over
  resetMessages();

  // Validasi apakah tebakan ada di daftar nama
  if (!daftarNama.map(name => name.toLowerCase()).includes(tebakan)) {
    alert("Nama yang kamu masukkan tidak ada dalam daftar pilihan!");
    return;
  }

  // Cek tebakan
  if (tebakan !== namaRahasia) {
    // Penalti skor untuk tebakan salah
    skor -= 50;
    skor = Math.max(0, skor); // Pastikan skor tidak negatif
    jumlahSalah++;

    updateScoreAndAttempts();

    if (jumlahSalah > 2) {
      gameOver();
    } else {
      document.getElementById("feedback").textContent = "Tebakanmu salah. Coba lagi!";
    }
  } else {
    // Tambahkan skor untuk tebakan benar
    skor += 100;
    document.getElementById("skor").textContent = skor;
    document.getElementById("congratulationsMessage").textContent =
      "Selamat! Kamu berhasil menebak nama yang benar: " + namaRahasia;
    endGame();
  }
}

function resetMessages() {
  document.getElementById("feedback").textContent = "";
  document.getElementById("gameOverMessage").textContent = "";
  document.getElementById("congratulationsMessage").textContent = "";
}

function updateScoreAndAttempts() {
  document.getElementById("jumlahSalah").textContent = jumlahSalah;
  document.getElementById("skor").textContent = skor;
}

function gameOver() {
  document.getElementById("gameOverMessage").textContent = "Game Over! Kamu sudah mencoba 3 kali.";
  endGame();
}

function endGame() {
  document.getElementById("tebakan").disabled = true;
  document.querySelector("button").disabled = true;
}
