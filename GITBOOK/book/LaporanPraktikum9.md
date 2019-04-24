# HTTP Service

**Praktikum – Bagian 1: JSONPlaceHolder**

- Pada bagian ini kita akan menggunakan fake HTTP Service yang akan kita gunakan sebagai back end aplikasi kita. Kunjungi alamat berikut : http://jsonplaceholder.typicode.com/
Jika Anda scroll down maka Anda akan menemukan bagian Resources seperti pada gambar 2 berikut 
![](image/Jobsheet9/1.png)

**Praktikum - Bagian 2 : Getting Data**
1. Buat component baru dengan nama posts dengan perintah ng g c posts
 ![](image/Jobsheet9/2.png)

2. Untuk menggunakan HTTPService, kita perlu melakukan import HttpModule pada app.module.ts.
![](image/Jobsheet9/2a.png)

3. Jika HttpModule tidak muncul secara otomatis maka anda harus menginstal terlebih dahulu dengan perintah npm i @angular/http
![](image/Jobsheet9/3.png)

4. Modifikasi file posts.component.ts menjadi seperti berikut
![](image/Jobsheet9/4.png)

5. Ubah file app.component.html seperti berikut :
 ![](image/Jobsheet9/5.png)

6. Jalankan dan Catat hasilnya (soal 1)
 ![](image/Jobsheet9/7.png)

7. Bagaimana jika anda lupa melakukan import HttpModule pada langkah ke-2 ? Lakukan commenting pada HttpModule seperti pada kode berikut :
 ![](image/Jobsheet9/8.png)

8. Apa yang terjadi pada console? Berikan penjelasan atas error yang terjadi. (soal 2)
 ![](image/Jobsheet9/9.png)

9. Lengkapi kode program pada posts.component.ts menjadi :
  ![](image/Jobsheet9/10.png)

10.  Jalankan pada browser dan jelaskan yang muncul pada console. (soal 3)
![](image/Jobsheet9/11.png)

11. Jelaskan perbedaan yang terjadi pada console jika kode pada posts.component.ts diubah menjadi : (soal 4)
![](image/Jobsheet9/12.png)

12. Untuk menampilkan data pada halaman browser, ubah kode program pada posts.component.html seperti berikut :
![](image/Jobsheet9/14.png)

13. Ubah kode program pada posts.component.ts :
![](image/Jobsheet9/15.png)

14. Jalankan dan jelaskan apa yang muncul pada browser. (soal 5)
![](image/Jobsheet9/17.png)

**Praktikum - Bagian 3 : Creating Data**

1. Kita akan menambahkan sebuah text area untuk memasukkan data melalui browser, seperti gambar berikut :
![](image/Jobsheet9/20.png)

2. Pertama, tambahkan input elemen pada posts.component.html :
 ![](image/Jobsheet9/21.png)

3. Modifikasi kode program pada posts.component.ts 
![](image/Jobsheet9/22.png)

4. Simpan dan jalankan pada browser.
![](image/Jobsheet9/13.png)

5. Jelaskan dengan kalimatmu sendiri bagaimana jalannya program setiap baris pada fungsi createPost. (soal 6)
<br> Hasil Keluaran Berupa ID

**Praktikum - Bagian 4 : Updating Data**

1. Kita akan menambahkan sebuah button Update untuk mengubah data melalui browser, seperti gambar berikut :
![](image/Jobsheet9/29.png)

2. Tambahkan button Update dengan modifikasi kode program seperti di bawah ini :
![](image/Jobsheet9/21.png)

3. Tambahkan fungsi updatePost pada posts.ts seperti di bawah :
![](image/Jobsheet9/22.png)

4. Simpan dan jalankan pada browser
![](image/Jobsheet9/23.png)

5. Apa fungsi patch pada potongan kode program pada langkah 3? (soal 7)
<br> Untuk memodifikasi isi dari UpdatePost

**Praktikum - Bagian 5 : Deleting Data**
1. Kita akan menambahkan sebuah button Delete di sebelah button Update untuk menghapus data melalui browser, seperti gambar berikut:
![](image/Jobsheet9/26.png)

2. Tambahkan button Delete dengan modifikasi kode program seperti di bawah ini :
![](image/Jobsheet9/24.png)

3. Tambahkan fungsi deletePost pada posts.ts seperti di bawah :
![](image/Jobsheet9/25.png)

4. Simpan dan jalankan pada browser.
![](image/Jobsheet9/28.png)

5. Apa fungsi splice pada potongan kode program pada langkah 3? (soal 8)
<br> Menambah dan Menghapus elemen baru 
