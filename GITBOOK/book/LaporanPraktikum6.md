# Jobsheet 6 : Template-Driven Forms 

**6.1 Membuat Form Boostrap**

1. buka file contact.component.html dan tambahkan code berikut: 
![](image/Jobsheet6/1.png)

2. buka file app.component.html dan tambahkan code berikut :
![](image/Jobsheet6/2.png)

3. jalankan servernya maka hasilnya seperti berikut
![](image/Jobsheet6/3.png)

**6.2 Macam-Macam Form**

1. generate 2 buah component dengan nama reactive-form dan template-driven 
![](image/Jobsheet6/4.png)

![](image/Jobsheet6/4a.png)

2. buka file reactive-form.component.html dan buatlah code seperti berikut :
![](image/Jobsheet6/5.png)

3. buka file app.component.html dan tambahkan code berikut :
![](image/Jobsheet6/6.png)

4. sehingga hasilnya seperti berikut 
![](image/Jobsheet6/7.png)

5. langkah berikutnya buatlah sebuah interface dengan nama mahasiswa.interface.ts dan tambahkan code berikut:
![](image/Jobsheet6/8.png)

6. Dikarenakan untuk menggunakan reactive-forms diperlukan FormBuilder dan FormGroup dari module ReactiveFormsModule maka kita harus tambahkan ReactiveFormModule dan FormGroup  pada app.module.ts seperti pada gambar berikut :
![](image/Jobsheet6/9.png)

7. buka file reactive-form.component.ts, import terlebih dahulu FormBuilder dan FormsGroup dan tambahkan beberapa code berikut 
 ![](image/Jobsheet6/10.png)

8. line 25-33 adalah method yang digunakan untuk mengenerate form yang sesuai dengan structur form  
 ![](image/Jobsheet6/11.png)

9. buka file reactive-form.component.html dan modifikasi codenya menjadi seperti berikut  
 ![](image/Jobsheet6/12.png)

10. jalan server localhost maka hasilnya seperti berikut :
 ![](image/Jobsheet6/13.png)

 ![](image/Jobsheet6/14.png)

11. untuk template-driven kita membutuhkan FormsModule pada app.module.ts, jadi buka file app.module.ts dan tambahkan FormsModule 
  ![](image/Jobsheet6/15.png)

12. buka file template-driven.componentn.ts dan tambahkan struktur form seperti berikut :
  ![](image/Jobsheet6/16.png)

13. buka file template-driven.component.html dan tambahkan code berikut :
  ![](image/Jobsheet6/17.png)

14. tambahkan method onSubmit pada template-driven.component.ts :
  ![](image/Jobsheet6/18.png)

15. buka file app.component.html tambahkan code berikut :
  ![](image/Jobsheet6/19.png)

16. hasil :
 ![](image/Jobsheet6/13.png)

 ![](image/Jobsheet6/14.png)

**6.3 ngModel** 

1. buka file contact-form.component.html dan tambahkan ngmodel seperti berikut :
 ![](image/Jobsheet6/20.png)
 
2. buka file contact-form.component.ts dan tambahkan decorator input ( line 9 dan 10)
 ![](image/Jobsheet6/21.png)

3. coba jalan servernya dan lihat terdapat pesan error seperti pada gambar berikut:
![](image/Jobsheet6/22.png)

4. tambahkan atribut name pada tag input :
![](image/Jobsheet6/23.png)

5. jalankan servernya ( cat:tidak perlu diklik button untuk menampilkan data karena tidak menggunakan event binding jadi inputan akan langsung tampil saat user memasukan data) 
![](image/Jobsheet6/24.png)

6. buka file contact.component.html modifikasi code berikut ini: 
![](image/Jobsheet6/25.png)

7. buka file contact.component.ts modifikasi code berikut ini :
![](image/Jobsheet6/26.png)

8. jalankan server dan lihat pada inspect maka akan muncul property dari ngModel :
![](image/Jobsheet6/27.png)

**6.4 Validasi**

1. buka file contact.component.html dan tambahkan code berikut
![](image/Jobsheet6/29.png)

2. jalankan localhost dan lihat hasilnya :
![](image/Jobsheet6/28.png)

3. Buka file contact.component.html dan tambahkan code berikut (line 39) 
 ![](image/Jobsheet6/32.png)

4. jalankan localhost pada saat dijalankan maka secara default alert tidak akan muncul dan pada saat field nama dikosongkan maka akan muncul alert “Nama harus diisi” 
 ![](image/Jobsheet6/30.png)

 ![](image/Jobsheet6/31.png)

**6.5 Spesific Validasi Error**

1. buka file conctact.component.html dan tambahkan beberapa code berikut :
 ![](image/Jobsheet6/33.png)

2. jalankan localhost jika kita masukkan angka 1 
 ![](image/Jobsheet6/34.png)

3. jika kita inspect element maka pada bagian property errors terdapat jenis-jenis validasi yang digunakan seperti pada gambar berikut :
 ![](image/Jobsheet6/35.png)

**6.6 Styling Invalid Input Field**
 
 1. buka file contact.component.css dan tambahkan code berikut 
 ![](image/Jobsheet6/36.png)

 2. jalankan localhost jika kita inputkan salah 
  ![](image/Jobsheet6/37.png)

**6.7 ngForm**

1. buka file contact.component.ts dan tambahkan sebuah method submit seperti pada gambar berikut (line 23-25) 
 ![](image/Jobsheet6/38.png)

2. buka file contact.component.html dan buatlah sebuah template variabel ngForm atau property ngForm dengan nama form (#form) yang nanti digunakan sebagai parameter dari method submit seperti pada gambar berikut (line 24) 
 ![](image/Jobsheet6/38a.png)

3. jalankan localhost dan inspect element, masukkan pada field nama adalah pisang dan tambahkan pada text area kata-kata setelah itu tekan button :
 ![](image/Jobsheet6/39.png)

**6.8 ngModelGroup**

1. buka file contact.component.html dan tambahkan code (line 26-27) dan copy paste inputan nama ke dalam div ngModelGroup seperti pada gambar 
![](image/Jobsheet6/40.png)

![](image/Jobsheet6/41.png)

2. jika kita ingin membuat validasi pada ngFormGroup maka kita dapat menambahkan template variabel seperti pada gambar berikut :
![](image/Jobsheet6/42.png)

**6.9 Disabling the submit button**

1. buka file contact.component.html dan tambahkan code berikut pada tag button 
![](image/Jobsheet6/43.png)

2. jalankan localhost jika berhasil secara default button akan disable, button akan enable saat terdapat inputan 
![](image/Jobsheet6/44.png)

![](image/Jobsheet6/45.png)

**6.10 Bekerja Dengan Check Box**

1. buka file contact.component.html dan tambahkan code check box seperti pada gambar berikut (line 66-73)
![](image/Jobsheet6/47.png)

2.  jalankan localhost 
![](image/Jobsheet6/48.png)

**6.11 Bekerja Dengan Drop-Down List**
1. buka file contact.component.html tambahkan code untuk dropdown list seperti pada gambar berikut (line 72-77) 
![](image/Jobsheet6/49.png)

2. buka file contact.component.ts dan tambahkan code berikut (line 21-24) 
![](image/Jobsheet6/50.png)

3. jalankan localhost maka hasilnya seperti berikut :
![](image/Jobsheet6/51.png)

4.  itu kita juga dapat menampilkan property id dan property nama dengan menggunakan property ngValue seperti berikut 
![](image/Jobsheet6/52.png)

5. sehingga hasilnya seperti berikut
![](image/Jobsheet6/53.png)

6. selain itu juga kita dapat menggunakan multiple (line 74) jika ingin memilih keduanya seperti pada gambar berikut:
![](image/Jobsheet6/54.png)

7. sehingga hasilnya seperti berikut (tekan control untuk dapat memilih keduanya) 
![](image/Jobsheet6/55.png)

**Bekerja Dengan Radio Button**

1. buka file contact.component.html dan tambahkan code berikut (line 83-94) 
![](image/Jobsheet6/57.png)

2. jalankan localhost (menggunakan ngModel) 
![](image/Jobsheet6/58.png)

3. atau kita bisa menggunakan directive ngFor untuk menampilkan value seperti berikut :
![](image/Jobsheet6/59.png)

4. sehingga hasilnya juga sama  
![](image/Jobsheet6/60.png)


