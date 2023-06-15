Gagal join domain PC baru SPAN
==============================

Infrastruktur DJPb · Dibuat **20 AUGUST 2020** · Dilihat **182 kali** ·

Penyebab masalah gagal join domain antara lain :

a. PC tidak terkoneksi dengan jaringan

b. koneksi tidak lancar (intermitten / response time sangat besar)

c. koneksi dari PC ke domain terblokir oleh firewall PC. 

  
Solusi untuk permasalahan tersebut :  

1.  Pastikan IP, subnet, gateway, dan DNS sudah tersetting dengan benar (alamat IP DNS 10.242.227.53 / 52)
2.  pastikan koneksi PC dengan network kemenkeu lancar (hasil ping tidak putus-putus dan response time stabil kurang dari 500ms). 
3.  ubah profil jaringan menjadi "home" (pada windows 7) atau "private" (pada windows 10).   
      
    PC SPAN sudah menggunakan domain kemenkeu.go.id sehingga untuk DNS server mengikuti DNS kemenkeu.go.id
    
    Saat ini alamat IP DNS server kemenkeu.go.id adalah 10.242.227.53/52 dan sudah diatur oleh DHCP server jaringan SPAN
    

  
  
  

* * *