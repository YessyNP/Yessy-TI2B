// instalasi typescript
// function log(message) {
//     console.log(message);
// }
// let message = "Hello World";
// log(message);
//declaring variables
// function doSomething(){
//     for (let i = 0; i < 5; i++){
//         console.log(i);
//     }
//     console.log('Finally: ' + i);
// }
// doSomething();
//types
// let count =5;
// count = 'a'; //karena let count pada line 1 adalah number
//types assertion
// let pesan;
// pesan='abc';
// let percobaan=(<string>pesan).endsWith('c');
// let alternative=(pesan as string).endsWith('c');
//Arrow Function
// let log = function pesan(){
//     console.log();
// }
//kode diatas bisa disingkat menggunakan fungsi arrow
// let doLog=(pesan)=>{
//     console.log(pesan);
// }
//atau seperti berikut
// let doLog1=(pesan)=>console.log(pesan);
//interface
// interface Point{
//     x:number;
//     y:number;
// }
// let drawPoint=(point:Point)=>{
//     //...
// }
// drawPoint({
//     x:1,
//     y:3,
// })
//classes
// class Pointku{
//     a:number;
//     b:number;
//     draw(){
//         //...
//     }
//     getDistance(another:Pointku){
//         //...
//     }
// }
//objects
var Pointku = /** @class */ (function () {
    function Pointku() {
    }
    Pointku.prototype.draw = function () {
        console.log('X' + this.a + ',Y' + this.b);
    };
    Pointku.prototype.getDistance = function (another) {
        //...
    };
    return Pointku;
}());
