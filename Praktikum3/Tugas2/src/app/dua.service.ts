import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DuaService {

  constructor() {}
    getDua() {
      return [
      {NO: 1, Hobby: "Memasak", Keterangan: "setiap hari"},
      {NO: 2, Hobby: 'membaca', Keterangan: 'Setiap ada waktu luang'},
      {NO: 3, Hobby: 'mendengarkan musik', Keterangan: 'Pada setiap saat'}
      ]
    }
  
}
