# Directive

**1. NgIF**
- Buka file
![](image/Jobsheet5/1.png)

- Buka file
![](image/Jobsheet5/1.png)

- Jalankan locallhost maka hasilnya seperti berikut :
![](image/Jobsheet5/3.png)

- Jika array pada app.component.ts (courses=[];) dikosongkan maka hasilnya seperti berikut :
 ![](image/Jobsheet5/4.png)
 
*contoh kedua  menggunakan else:*
- buka file app.component.html modifikasi kodenya menjadi berikut  
 ![](image/Jobsheet5/p 2.png)

- jalankan localhost dengan kondisi array pada app.component 
* dengan array kosong

![](image/Jobsheet5/6.png)

![](image/Jobsheet5/p 2 kosong.png)

* dengan array ada isi

![](image/Jobsheet5/7.png)

![](image/Jobsheet5/3.png)

*Cara ketiga*

- Buka file app.component.html modifikasi kodenya menjadi berikut
![](image/Jobsheet5/p 3.png)
- jalankan localhost dengan kondisi array pada app.component

* dengan array kosong

![](image/Jobsheet5/6.png)

![](image/Jobsheet5/p 2 kosong.png)

* dengan array ada isi

![](image/Jobsheet5/7.png)

![](image/Jobsheet5/3.png)

**Hidden Property**

- buka app.component.html 
![](image/Jobsheet5/hidden.png)

- jalankan localhost maka hasilnya seperti berikut : 
![](image/Jobsheet5/hasil hidden.png)

- selain contoh diatas kita juga dapat memberikan property seperti berikut:
![](image/Jobsheet5/c h p.png)

- jalankan localhost (berbeda hasil jika pada array courses tidak terdapat isinya)
![](image/Jobsheet5/hasil chp.png)

- Jika kita inspect element maka akan terlihat property hidden tidak terdapat kondisi true ataupun false.
![](image/Jobsheet5/true.png)

- berbeda jika kita menggunakan ngIF terdapat bindings dengan nilai false 
![](image/Jobsheet5/false.png)

**ngSwitchCase**

- buka file app.component.html modifikasi codenya menjadi seperti berikut 
![](image/Jobsheet5/switch case.png)

- buka file app.component.ts tambahkan property viewMode (line 12) 
![](image/Jobsheet5/switch case 2.png)

-  run localhost maka hasilnya seperti berikut saat diklik list view maka akan muncul list view content dan jika kita pilih ListView maka akan tampil tulisan List View Content 
 ![](image/Jobsheet5/hasil switch case.png)
 
**NgFor**
- buka app.component.ts property CoursesFor yang berisikan array (line 12) 
 ![](image/Jobsheet5/ng for 2.png)

 - - buka file app.component.html tambahkan directive ngFor pada element li
 ![](image/Jobsheet5/ng for 1.png)

 - jika dijalankan maka hasilnya seperti berikut
  ![](image/Jobsheet5/hasil ng for.png)

  - kita juga dapat memberi tanda tertentu pada index yang bernilai ganjil dengan menggunakan isEven https://angular.io/api/common/NgForOf  
   ![](image/Jobsheet5/ng for even 1.png)
   ![](image/Jobsheet5/hasil even.png)

**6.1 ngFor dan change Detection**
- tambahkan button pada app.component.html (line 64) 
 ![](image/Jobsheet5/change detection 1.png)

 - tambahkan method onAdd()
  ![](image/Jobsheet5/change detection 2.png)

 - sehingga hasilnya seperti berikut (jika kita tekan button add maka akan ditambahkan sebuah data courses 6) 
    ![](image/Jobsheet5/hasil change.PNG)
    ![](image/Jobsheet5/hasil change 2.PNG)

- Tambahkan sebuah method onRemove pada app.component.ts 
![](image/Jobsheet5/8.PNG)

- Buka app.component.html dan tambahkan sebuah button untuk menghapus (line69)
![](image/Jobsheet5/remove.PNG)

- hasilnya seperti berikut (pada saat button remove diclick maka salah satu data akan hilang sementara)
![](image/Jobsheet5/remove hasil.PNG)
![](image/Jobsheet5/setelah remove.PNG)

- buka file app.component.html tambahkan button (line 70) 
![](image/Jobsheet5/update 1.PNG)

- buka file app.component.ts buatlah sebuah method onChange dengan parameter item dan didalam method tersebut adanya perubahan string menjadi updated 
![](image/Jobsheet5/update 2.PNG)

- hasilnya 
![](image/Jobsheet5/hasil update.PNG)

**ngFor dan trackby**

- Buka file app.component.ts buatlah sebuah method dengan nama loadCourses (line 38) tapi sebelumnya buat sebuah property dengan nama coursesForOne (line 37) 
![](image/Jobsheet5/trackby.PNG)

- buka file app.component.html dan tambahkan code seperti pada gambar
![](image/Jobsheet5/13.PNG)

- hasilnya saat button diclick
![](image/Jobsheet5/hasil trackby 1.PNG)
![](image/Jobsheet5/hasil trackby 2.PNG)

- sekarang kita lakukan analisa buka inspect element, saat button belum diclick seperti pada gambar berikut 
![](image/Jobsheet5/inspect trackby 1.PNG)

- dan saat button diklik maka element ul akan muncul seperti pada gambar berikut :
 ![](image/Jobsheet5/inspect trackby 2.PNG)

- untuk menambahkan TrackBy dengan cara menambahkan pada app.component.html pada directive ngFor 
![](image/Jobsheet5/menambahkan trackby 2.PNG)

- selain itu tambahkan juga sebuah method trackCourse dengan parameter index dan itemone pada app.component.ts
![](image/Jobsheet5/menambahkan trackby 3.PNG)

**6.1 The leading Asterik**

![](image/Jobsheet5/the leading.PNG)

**6.1 ngClass**

![](image/Jobsheet5/class.PNG)

**6.1 Custom Directive**
- pertama kita harus membuat directive dengan nama input-format terlebih dahulu dengan perintah seperti berikut
![](image/Jobsheet5/install input format.PNG)

- jika directive berhasil digenerate maka kita pastikan di app.module.ts pada @NgModule terdapat nama directive yang kita buat tadi 
 ![](image/Jobsheet5/ng modul.PNG)
 
 - buka input-format.directive.ts dan tambahkan decorator HostListener seperti pada gambar berikut
  ![](image/Jobsheet5/host listener.PNG)

- Buka file app.component.html dan tambahakn code berikut
  ![](image/Jobsheet5/buka input 1.PNG)

- buka file input-format.directive.ts dan modifikasi codenya menjadi berikut 
 ![](image/Jobsheet5/12.PNG)

 - buka file app.component.html dan tambahkan property binding dengan nama format 
  ![](image/Jobsheet5/15.PNG)

- buka file input-format.directive.ts tambahkan decorator input dan modifikasi codenya seperti pada gambar berikut
    ![](image/Jobsheet5/18.PNG)

- cat:format disini adalah kondisi di app.component.html 
    ![](image/Jobsheet5/20.PNG)

- buka app.component.hml modifikasi codenya menjadi berikut
 ![](image/Jobsheet5/21.PNG)

 - buka input-format.directive.ts dan tambahkan decorator input dengan parameter appInputFormat 
  ![](image/Jobsheet5/22.PNG)

  - HASIL
    ![](image/Jobsheet5/hasil akhir.PNG)
    ![](image/Jobsheet5/hasil akhir 2.PNG)
