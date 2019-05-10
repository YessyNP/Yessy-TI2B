# Jobsheet-11: Authentication and Authorization 
---

#### Praktikum – Bagian 1: Implementation Login
1. Buka folder auth-demo-starter kemudian open terminal dan lakukan ng serve. Catat hasil nya (soal 1)

![](image/Jobsheet11/pertama.png)

2. Apabila terjadi error seperti dibawah ini :

![](image/Jobsheet11/1.png)

Maka lakukan perintah untuk menginstall angular2-jwt, dengan perintah :
`npm install angular2-jwt –save`  kemudian lakukan  **ng serve –open** 

![](image/Jobsheet11/p1.2.png)



3. Ketika kita klik menu Login untuk masuk ke aplikasi, hasilnya akan kembali
ke menu semula dengan kondisi [NAME] tidak ada perubahan. Sehingga akan ditambahkan autentikasi pada menu tersebut.
![](image/Jobsheet11/3.png)

4. Buka file auth.service.ts lalu tambahkan perintah seperti berikut ini :

![](image/Jobsheet11/4.png)
![](image/Jobsheet11/4a.png)

5. Jika sudah ditambahkan, jalankan perintah ng serve, dan klik bagian login lalu masukkan email address : mosh@domai.com dan password 1234 kemudian klik sign in. perhatikan apa yang terjadi? Catat hasilnya (soal 3)

![](image/Jobsheet11/h1.png)

6. Kemudian lakukan login dengan email yang formatnya tidak valid contoh email kita isi 1234 dengan password 1234 maka ketika kita login dan kita inspect response apa yang muncul ?
Catat hasilnya (soal 4)

![](image/Jobsheet11/6.png)

7. Buka file auth.service.ts kemudian lakukan perubahan seperti berikut :
![](image/Jobsheet11/7.png)


8. Kemudian jalankan dan lakukan login dengan username dan password yang sesuai pada no 5, kemudian lakukan inspect pilih menu application liat di local storage, apa yang terlihat ? catat hasilnya (soal 5)

![](image/Jobsheet11/hasil.png)

---

#### Praktikum – Bagian 2: Implemetasi Logout
1. Open file home.component.html, tambahkan  
![](image/Jobsheet11/9.png)

2. Open file auth.service.ts lalu tambahkan pada bagian logout :
![](image/Jobsheet11/11b.png)

3. Jalankan aplikasi, lalukan login dengan username dan password seperti sebelumnya dan lakukan inspect, cek pada local storage harusnya token nya sudah ada di local storage. Kemudian lakukan logout. Apa yang terjadi pada local storage ?
Catat hasil (soal 6)

![](image/Jobsheet11/9a.png)


---

#### Praktikum – Bagian 3: Getting the Current User
1. Buka **https://jwt.io**, kita akan membuat token yang nantinya akan kita tempelkan di fake-backed.ts
![](image/Jobsheet11/10.png)


2. Open auth.service.ts, lakukan modifikasi pada part isLoggeedIn() sehingga menjadi seperti berikut :
![](image/Jobsheet11/12.png)

3. Kemudian tambahkan code berikut tepat dibawah langkah no 2 :
![](image/Jobsheet11/13.png)


4. Open fake-backend.ts, ganti token yang lama menjadi token pada no 1
![](image/Jobsheet11/11.png)

5. Open file home.component.html , modifikasi seperti berikut :
![](image/Jobsheet11/14.png)

6. Jalankan aplikasi. Cek apa yang terjadi dan beri penjelasan (soal 7)

<br>halaman awal
![](image/Jobsheet11/40.png)

<br>login
![](image/Jobsheet11/15.png)

<br> Toket setelah diubah
![](image/Jobsheet11/hasil.png)

<br> Hasil Setelah Login
![](image/Jobsheet11/17.png)

<br> Halaman Admin
![](image/Jobsheet11/18.png)

<br> Hasil Akhir Setelah Logout
![](image/Jobsheet11/19.png)
![](image/Jobsheet11/22.png)
![](image/Jobsheet11/akhir.png)