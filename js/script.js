// js/script.js

document.addEventListener('DOMContentLoaded', function() {
    
    // --- Logika untuk Formulir Pemesanan WhatsApp ---
    const waForm = document.getElementById('waForm');
    if (waForm) { 
        waForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // --- NOMOR WA ADMIN (Gunakan kode negara 62) ---
            const noWA = '6285179712235'; 

            const nama = document.getElementById('nama').value;
            const kaosType = document.getElementById('kaosType').value;
            const jumlah = document.getElementById('jumlah').value;
            // Cek apakah input warna ada (untuk jaga-jaga), jika tidak ada isi strip '-'
            const warna = document.getElementById('warna') ? document.getElementById('warna').value : '-';
            const alamat = document.getElementById('alamat').value;

            // Kita buat teksnya dulu sebagai string biasa
            // Gunakan \n untuk baris baru agar lebih rapi saat di-encode
            const pesanWA = `Halo Admin Sablonku, saya ingin memesan:

--------------------------------
  *Nama:* ${nama}
  *Jenis Paket:* ${kaosType}
  *Jumlah:* ${jumlah} pcs
  *Warna Kaos:* ${warna}
  *Alamat:* ${alamat}
--------------------------------

Mohon info total harga. Saya akan kirimkan file desainnya setelah ini.`;

            // --- PERBAIKAN UTAMA DISINI ---
            // Gunakan encodeURIComponent() untuk membungkus seluruh variabel pesanWA
            // Ini akan menjaga Emoji dan tanda '+' tetap muncul
            const url = `https://wa.me/${noWA}?text=${encodeURIComponent(pesanWA)}`;
            
            window.open(url, '_blank');
        });
    }
});