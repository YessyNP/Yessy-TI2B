import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HobbyService {
 

  constructor() { }
  getYessy() {
    return [
      {id:1 , hobby: "Memasak" , ket:"Setiap Hari"},

      {id:2 , hobby: "Membaca" , ket:"Setiap ada waktu luang"} ,
      {id:3 , hobby: "Mendengarkan Musik" , ket:"Pada Setiap saat"}
    ]
  }
}
