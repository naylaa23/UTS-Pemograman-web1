# UTS PEMOGRAMAN WEB 1

Nama : Nayla Zalfa Zahiyah 
NIM : 24090017

# Link Project
Link GitHub Repository :https://github.com/naylaa23/UTS-Pemograman-web1
Link GitHub Pages :https://naylaa23.github.io/UTS-Pemograman-web1/

# Halaman Login (Index HTML)
Fungsi:

Menjadi halaman awal untuk autentikasi pengguna.
Memiliki dua input utama: Email (username) dan Password (NIM mahasiswa).
Saat tombol Login ditekan, dilakukan validasi form:
Jika salah satu input kosong → tampilkan pesan error.
Jika semua terisi → tampilkan pesan “Login berhasil” lalu redirect ke dashboard.html.
Proses login disimulasikan dengan JavaScript (tanpa backend) menggunakan event listener dan window.location.href.

# Halaman Dashboard 
Fungsi:

Menampilkan ringkasan data produk berupa tiga card summary:
Total Produk
Total Penjualan
Total Pendapatan (Revenue)
Data diambil dari array dummy dalam script.js.
Menggunakan Flexbox atau Grid CSS agar tampilan responsif dan rapi.
Terdapat tombol “Lihat Data Produk” yang akan mengarahkan ke products.html.

# Halaman List Data Produk (products.html)
Fungsi:

Menampilkan tabel daftar produk dengan kolom:
No | Product Name | Price | Stock | Aksi
Data diambil dari array of object dalam script.js.
Menggunakan JavaScript DOM Manipulation untuk menampilkan data ke tabel dengan forEach() atau map().
Kolom Aksi berisi dua ikon:
🖊️ Edit → menampilkan alert edit nama produk.
🧹 Delete → menampilkan konfirmasi dan menghapus baris produk dengan remove().
