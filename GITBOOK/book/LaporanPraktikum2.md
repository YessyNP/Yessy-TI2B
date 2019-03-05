# TYPESCRIPT Jobsheet 2

**Praktikum	–	Bagian	1:	Instalasi	Typescript**

*  Ketik   perintah    berikut :    ```npm install –g  typescript``` 
![](image/Jobsheet2/1.png)

*  Kemudian cek version dari    typescript  yang    terinstall  
![](image/Jobsheet2/2.png)

* Buatlah  direktori   baru    dengan  nama    ts-hello    dengan  perintah    :   mkdir   ts-hello    
![](image/Jobsheet2/3.png)

* Kemudian	masuklah	ke	direktori	pada	no	7	dengan	perintah	cd	ts-hello	dan	buat	lah	file	baru	dengan	nama	main.ts	pada	direktori	ts-hello	
![](image/Jobsheet2/4 main ts.png)

* Kemudian buka    terminal    dan lakukan perintah    :   tsc main.ts untuk   melakukan   proses  transpile   file    typescript  kedalam javascript, Cek apakah  sudah   terbuat file    main.js,    lakukan perintah    ls
![](image/Jobsheet2/4 main js.png)
* Lakukan  execute pada    file    main.js dengan  perintah    node    main.js.    catat   hasil   nya
![](image/Jobsheet2/5.png)

**Praktikum	–	Bagian	2:	Declaring	Variables**
* Buka	file	main.ts	,	kemudian	tuliskan	code	seperti	berikut	: 
``` typecript
function doSomething(){
    for (let i = 0; i < 5; i++){
        console.log(i);
    }
    console.log('finally: ' + i);
}
doSomething();
```

* Remove   file    main.js hasil   praktikum   bagian  1   dengan  perintah    rm  main.js,    cek apakah  sudah   terhapus    atau    belum.  Catat   hasilnya    
![](image/Jobsheet2/6.png)


* Lakukan  transpile   file    main.ts dengan  perintah    yang    ada pada    praktikum   bagian  1   langkah no  10. Catat   hasilnya    apakah  sudah   terbuat file    javascriptnya.
![](image/Jobsheet2/7.png)

* Jika sudah   terbuat,    execute file    javascript  yang    sudah   terbuat pada    langkah 3.  Kemudian    catat   hasilnya (SOAL 8)
![](image/Jobsheet2/8.png)

**Praktikum	-	Bagian	3:	Types**

* Buka	file	main.ts	kemudian	tuliskan	listing	program	berikut	
``` typescript
let count = 5;
count = 'a';
```
* Mari  kita    perhatikan  code    pada    langkah 1,  terlihat    bahwa   terjadi error   pada    line    2.  Namun   dengan  kita    melakukan   transpile   file    typescript  ke  dalam   file    javascript, kesalahan   tersebut    akan    dibenarkan  dengan  sendirinya  pada    file    javascript.     Lakukan proses  transpile   file    main.ts dengan  perinta tsc main.ts.        Catat   hasilnya   (SOAL 9)     
![](image/Jobsheet2/9.png)
* Kemudian	buka	file	main.js,	hasilnya	harusnya	seperti	berikut	:	
``` typescript
var count =5;
count = 'a';
```

**Praktikum	–	Bagian	4:	Type	Assertion**	
* buka	file	main.ts,	kemudian	ketikkan	code	berikut	ini	:	
    ```typescript
    let pesan;
    pesan ='abc';
    let percobaan=(<string>pesan).endsWith('c');
    let alternative=(pesan as string).endsWith('c');
    ```
	
* Kemudian	buat	file	main.js	(jangan	lupa	untuk	meremove	file	main.js	sebelumnya)	kemudian	execute	seperti	praktikum	sebelumnya.	Catat	hasilnya (SOAL 10)	
![](image/Jobsheet2/10.png)

**Praktikum	–	Bagian	5:	Arrow	Function**	
buka	file	main.ts,	kemudian	ketikkan	code	berikut	ini	:	
``` typescript
let log = function pesan(){
    console.log(pesan);
}
// code diatas bisa disingkat menggunakan function arrow
let doLog=(pesan)=>{
    console.log(pesan);
}
//atau seperti berikut
let doLog=(pesan)=>console.log(pesan);
```
* Kemudian	buat	file	main.js	(jangan	lupa	untuk	meremove	file	main.js	sebelumnya)	kemudian	execute	seperti	praktikum	sebelumnya.	Catat	hasilnya	(soal	11)	
![](image/Jobsheet2/11.png)

**Praktikum	–	Bagian	6:	Interface**
* buka	file	main.ts,	kemudian	ketikkan	code	berikut	ini	:	
```typescript
interface Point{
    x: number;
    y: number;
}
let drawPoint=(point:Point)=>{
    //...
}
drawPoint({
    x:1;
    y:3;
})
```
* Kemudian	buat	file	main.js	(jangan	lupa	untuk	meremove	file	main.js	sebelumnya)	kemudian	execute	seperti	praktikum	sebelumnya.	Catat	hasilnya	(soal	12)	
![](image/Jobsheet2/12.png)

**Praktikum	–	Bagian	7:	Classes**
* buka	file	main.ts,	kemudian	ketikkan	code	berikut	ini	:	
``` typescript
class Pointku{
    a: number;
    b:number;

    draw(){
        // ....
        }
        getDistance(another:Pointku){
            //....
        }
    }
```
* Kemudian	buat	file	main.js	(jangan	lupa	untuk	meremove	file	main.js	sebelumnya)	kemudian	execute	seperti	praktikum	sebelumnya.	Catat	hasilnya
![](image/Jobsheet2/13 main js.png)

**Praktikum	–	Bagian	8:	Objects**
* buka	file	main.ts,	kemudian	ketikkan	code	berikut	ini	:	
``` typescript
class Pointku1{
    a:number;
    b:number;

    draw (){
        console.log('X' + this.a + ',Y'+this.b);
    }
    getDistance(another:Pointku1){
        //....
    }
let coins:Pointku1
coinsdraw();
```
* Kemudian	buat	file	main.js	(jangan	lupa	untuk	meremove	file	main.js	sebelumnya)	kemudian	execute	seperti	praktikum	sebelumnya.	Catat	hasilnya
![](image/Jobsheet2/14 main js.png)
