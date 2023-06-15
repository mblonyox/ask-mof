Jenis Dokumen SPM-PP pada aplikasi SAS, Konversi dan PIN KPPN
=============================================================

Pelaksanaan Anggaran · Dibuat **17 DECEMBER 2020** · Dilihat **293 kali** ·

Tidak ada aturan baku untuk jenis dokumen pada Surat Perintah Membayar Pengembalian Penerimaan (SPM-PP), tetapi yang harus diperhatikan adalah pada saat perekaman SPM pastikan kode jenis dokumen yang direkam sama dengan kode jenis dokumen di perekaman PIN di KPPN agar proses konversi SPM PP dapat berjalan lancar.

Dapat menggunakan jenis dokumen 51. Jika pada database PINPPSPM tidak ada jenis dokumen 51 dapat ditambahkan manual. 

Pada aplikasi SAS:

*   SPM Pengembalian Pendapatan dibuat dengan Aplikasi SAS Modul PPSPM,
*   kemudian dicetak dan di inject PIN dengan Aplikasi Inject PinPPSPM,
*   jika dicetakan tidak ada barcode, silahkan masukkan PIN langsung tanpa harus barcode SPM.

Pada aplikasi Konversi:

*   Penandatangan SPM PP harus direkam spesimennya di Aplikasi Konversi dengan NIP dan jenis dokumen sama dengan jenis dokumen di ADK SPM PP tersebut.  
    
*   Untuk di Aplikasi Konversi tetap diproses seperti biasa, jika SPM tidak ada barcode, maka langsung saja di konversi tanpa harus memasukkan barcode.

Pada aplikasi PIN KPPN:

*   Penandatangan SPM PP harus didaftarkan di Aplikasi PIN KPPN sesuai dengan NIP dan jenis dokumen sama dengan jenis dokumen di ADK SPM PP tersebut.
*   Terlebih dahulu satker mendaftarkan KPA sebagai PPSPM ke KPPN untuk direkam pada aplikasi PIN PPSPM, perekaman KPA sebagai PPSPM memilih jenis Non DIPA, dan jenis dokumen (jendok) dapat digunakan 51, disamakan dengan ADK dari SAS

  
  
  

* * *