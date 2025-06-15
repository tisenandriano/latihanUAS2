// Fungsi: Mencari nama pada daftar nama
function cariNama() {
  const input = document.getElementById("searchInput").value.trim().toLowerCase();
  const namaItems = document.querySelectorAll("#namaList li");
  let ditemukan = false;

  namaItems.forEach(item => {
    const nama = item.textContent.toLowerCase();
    if (nama === input) {
      item.style.backgroundColor = "#c8e6c9"; // highlight hijau
      ditemukan = true;
    } else {
      item.style.backgroundColor = ""; // reset
    }
  });

  const hasil = document.getElementById("hasilCari");
  if (input === "") {
    hasil.innerText = "Masukkan nama terlebih dahulu.";
  } else if (ditemukan) {
    hasil.innerText = `Nama \"${input}\" ditemukan dan disorot.`;
  } else {
    hasil.innerText = `Nama \"${input}\" tidak ditemukan.`;
  }
}

// Fungsi: Mengubah warna latar belakang secara acak
function ubahWarna() {
  const warna = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = warna;
}

// Fungsi: Menampilkan waktu saat ini
function tampilkanWaktu() {
  const waktuSekarang = new Date().toLocaleString('id-ID');
  document.getElementById('waktu').innerHTML = "Waktu saat ini: " + waktuSekarang;
}

// Fungsi: Menjumlahkan dua angka dari input
function jumlahkan() {
  const angka1 = parseFloat(document.getElementById('angka1').value);
  const angka2 = parseFloat(document.getElementById('angka2').value);
  const hasil = angka1 + angka2;

  if (!isNaN(hasil)) {
    document.getElementById('hasilJumlah').innerHTML = `Hasil: ${hasil}`;
  } else {
    document.getElementById('hasilJumlah').innerHTML = "Masukkan dua angka valid.";
  }
}

// Fungsi: Menangani submit form HTML
document.getElementById('contohForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Mencegah reload
  const nama = document.getElementById('nama').value.trim();
  const email = document.getElementById('email').value.trim();

  if (nama && email) {
    document.getElementById('outputForm').innerHTML = `Halo, ${nama}. Email kamu: ${email}`;
  } else {
    document.getElementById('outputForm').innerHTML = "Mohon isi semua kolom.";
  }
});


