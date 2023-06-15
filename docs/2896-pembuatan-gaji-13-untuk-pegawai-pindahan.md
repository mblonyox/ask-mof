Pembuatan Gaji 13 untuk pegawai pindahan
========================================

Aplikasi Perbendaharaan · Dibuat **17 JUNE 2019** · Dilihat **911 kali** ·

A. **Permasalahan**

Pegawai pindah dimana gaji Juni  masih dibayar di satker lama, sedangkan Gaji Juli  sudah di satker baru maka ketika ketika satker baru membuat Gaji13 **seharusnya tetap bisa muncul dan bisa dibuat Gaji 13 di satker baru.** Jika tidak muncul maka ada dua kemungkinan :

1.  Pegawai pindah tersebut gaji **Juni  di satker lama** **adalah Gaji Susulan**, sedangkan pada Satker baru tidak ada gaji susulan bulan Juni
2.  Pegawai pindah tersebut **gaji Juni  di satker lama adalah Gaji Induk** , sedangkan gaji Juni pada  **Satker baru** adalah gaji Susulan

Jadi terdapat perbedaan jenis Gaji yaitu gaji susulan dengan gaji induk

B. **Solusi**

Solusinya adalah membuat gaji susulan/induk dummy, **_untuk memancing data_**, pastikan bahwa untuk kasus point 1 dan 2 diatas bulannya adalah sama misalkan gaji susulan/induk dibuat bulan Juni 2019. Langkah-langkahnya adalah sebagai berikut :

1.  Rekam pegawai dummy di perekaman data pegawai misalkan NIP/NRP nya adalah : 1111111111111111, kemudian berikan **no urut dan status kawin awal tahun**
2.  Untuk point 1) : karena gaji yang bermasalah adalah gaji susulan, maka pegawai dummy ini  :

· Buat gaji susulan misalkan gaji Juni 2019, proses gaji sampai disimpan, lalu load master

· proses Gaji13  berdasarkan gaji susulan yang telah diload master, maka data pegawai pindah akan muncul

3. Untuk point 2) : karena gaji yang bermasalah adalah gaji induk, maka pegawai dummy ini  :

· Buat gaji induk misalkan gaji Juni 2019, proses gaji sampai disimpan, lalu load master

· proses Gaji13 berdasarkan gaji induk yang telah diload master, maka data pegawai pindah akan muncul 

  

  

  

Editor : HAI-Pedia

  
  
  

* * *