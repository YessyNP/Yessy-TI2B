# Directive

**1. NgIF**

1. Buka file :

  ![](image/Jobsheet5/1.png)

2. Buka file:

  ![](image/Jobsheet5/2.png)

3. Jalankan locallhost maka hasilnya seperti berikut :
![](image/Jobsheet5/3.png)

4. Jika array pada app.component.ts (courses=[];) dikosongkan maka hasilnya seperti berikut :
 ![](image/Jobsheet5/4.png)
 
*contoh kedua  menggunakan else:*
5. buka file app.component.html modifikasi kodenya menjadi berikut  
 ![](image/Jobsheet5/5.png)

6. jalankan localhost dengan kondisi array pada app.component 
dengan array kosong

![](image/Jobsheet5/6.png)

![](image/Jobsheet5/2k.png)

* dengan array ada isi

![](image/Jobsheet5/7.png)

![](image/Jobsheet5/3.png)

*Cara ketiga*

7.  Buka file app.component.html modifikasi kodenya menjadi berikut
![](image/Jobsheet5/3p.png)
8. jalankan localhost dengan kondisi array pada app.component
dengan array kosong

![](image/Jobsheet5/6.png)

![](image/Jobsheet5/2k.png)

* dengan array ada isi

![](image/Jobsheet5/7.png)

![](image/Jobsheet5/3.png)

**Hidden Property**

1. buka app.component.html :

![](image/Jobsheet5/hidden.png)

2. jalankan localhost maka hasilnya seperti berikut : 
![](image/Jobsheet5/hh.png)

3. selain contoh diatas kita juga dapat memberikan property seperti berikut:
![](image/Jobsheet5/chp.png)

4. jalankan localhost (berbeda hasil jika pada array courses tidak terdapat isinya)
![](image/Jobsheet5/hcp.png)

5. Jika kita inspect element maka akan terlihat property hidden tidak terdapat kondisi true ataupun false.
![](image/Jobsheet5/true.png)

6. berbeda jika kita menggunakan ngIF terdapat bindings dengan nilai false 
![](image/Jobsheet5/false.png)

**ngSwitchCase**

1. buka file app.component.html modifikasi codenya menjadi seperti berikut 
![](image/Jobsheet5/sc.png)

2. buka file app.component.ts tambahkan property viewMode (line 12) 
![](image/Jobsheet5/sc2.png)

3. run localhost maka hasilnya seperti berikut saat diklik list view maka akan muncul list view content dan jika kita pilih ListView maka akan tampil tulisan List View Content 
 ![](image/Jobsheet5/hsc.png)
 
**NgFor**

4. buka app.component.ts property CoursesFor yang berisikan array (line 12) 
 ![](image/Jobsheet5/ngf2.png)

5. buka file app.component.html tambahkan directive ngFor pada element li
 ![](image/Jobsheet5/ngf1.png)

6. jika dijalankan maka hasilnya seperti berikut
 ![](image/Jobsheet5/hngf.png)

7. kita juga dapat memberi tanda tertentu pada index yang bernilai ganjil dengan menggunakan isEven https://angular.io/api/common/NgForOf  
  ![](image/Jobsheet5/ngfe1.png)

  ![](image/Jobsheet5/he.png)

**6.1 ngFor dan change Detection**
1. tambahkan button pada app.component.html (line 64) 
 ![](image/Jobsheet5/cd1.png)

2. tambahkan method onAdd()
  ![](image/Jobsheet5/cd2.png)

3. sehingga hasilnya seperti berikut (jika kita tekan button add maka akan ditambahkan sebuah data courses 6) 
    ![](image/Jobsheet5/hc.png)
    ![](image/Jobsheet5/hc2.png)

4. Tambahkan sebuah method onRemove pada app.component.ts 
![](image/Jobsheet5/8.png)

5. Buka app.component.html dan tambahkan sebuah button untuk menghapus (line69)
![](image/Jobsheet5/remove.png)

6. hasilnya seperti berikut (pada saat button remove diclick maka salah satu data akan hilang sementara)
![](image/Jobsheet5/rh.png)
![](image/Jobsheet5/sr.png)

7. buka file app.component.html tambahkan button (line 70) 
![](image/Jobsheet5/u1.png)

8. buka file app.component.ts buatlah sebuah method onChange dengan parameter item dan didalam method tersebut adanya perubahan string menjadi updated 
![](image/Jobsheet5/u2.png)

9. hasilnya 
![](image/Jobsheet5/hu.png)

**ngFor dan trackby**

1. Buka file app.component.ts buatlah sebuah method dengan nama loadCourses (line 38) tapi sebelumnya buat sebuah property dengan nama coursesForOne (line 37) 
![](image/Jobsheet5/trackby.png)

2. buka file app.component.html dan tambahkan code seperti pada gambar
![](image/Jobsheet5/13.png)

3. hasilnya saat button diclick
![](image/Jobsheet5/ht1.png)
![](image/Jobsheet5/ht2.png)

4. sekarang kita lakukan analisa buka inspect element, saat button belum diclick seperti pada gambar berikut 
![](image/Jobsheet5/it1.png)

5. dan saat button diklik maka element ul akan muncul seperti pada gambar berikut :
 ![](image/Jobsheet5/it2.png)

6. untuk menambahkan TrackBy dengan cara menambahkan pada app.component.html pada directive ngFor 
![](image/Jobsheet5/mt2.png)

7. selain itu tambahkan juga sebuah method trackCourse dengan parameter index dan itemone pada app.component.ts
![](image/Jobsheet5/mt3.png)

**6.1 The leading Asterik**

![](image/Jobsheet5/tl.png)

**6.1 ngClass**

![](image/Jobsheet5/class.png)

**6.1 Custom Directive**
1. pertama kita harus membuat directive dengan nama input-format terlebih dahulu dengan perintah seperti berikut
![](image/Jobsheet5/iif.png)

2. jika directive berhasil digenerate maka kita pastikan di app.module.ts pada @NgModule terdapat nama directive yang kita buat tadi 
 ![](image/Jobsheet5/ng modul.png)
 
3. buka input-format.directive.ts dan tambahkan decorator HostListener seperti pada gambar berikut
  ![](image/Jobsheet5/hl.png)

4. Buka file app.component.html dan tambahakn code berikut
  ![](image/Jobsheet5/bi1.png)

5. buka file input-format.directive.ts dan modifikasi codenya menjadi berikut 
 ![](image/Jobsheet5/12.png)

6. buka file app.component.html dan tambahkan property binding dengan nama format 
  ![](image/Jobsheet5/15.png)

7. buka file input-format.directive.ts tambahkan decorator input dan modifikasi codenya seperti pada gambar berikut
    ![](image/Jobsheet5/18.png)

8. cat:format disini adalah kondisi di app.component.html 
    ![](image/Jobsheet5/20.png)

9. buka app.component.hml modifikasi codenya menjadi berikut
 ![](image/Jobsheet5/21.png)

10. buka input-format.directive.ts dan tambahkan decorator input dengan parameter appInputFormat 
  ![](image/Jobsheet5/22.png)

11. HASIL

    ![](image/Jobsheet5/ha1.png)
    
    ![](image/Jobsheet5/ha2.png)
