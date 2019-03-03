import { Component, OnInit } from '@angular/core';
import { DuaService } from '../Dua.service';


@Component({
  selector: 'app-dua',
  templateUrl: './dua.component.html',
  styleUrls: ['./dua.component.css']
})
export class DuaComponent implements OnInit {
  currentDate = Date.now();
  title = 'INI Tugas Pertama Biodata';

  name = 'Nama : Yessy Nindi Pratiwi';
  address = 'Alamat :Semanggi Barat No.6';
  hobby = 'Hobby saya';

  Dua;
  // Dua = [
    // {NO: 1, Hobby: "Memasak", Keterangan: "setiap hari"},
    // {NO: 2, Hobby: 'membaca', Keterangan: 'Setiap ada waktu luang'},
    // {NO: 3, Hobby: 'mendengarkan musik', Keterangan: 'Pada setiap saat'}


  constructor(private service:DuaService) { 
    this.Dua= service.getDua();
  }

  ngOnInit() {
  }

}
