import { Component } from '@angular/core';
import { HobbyService } from './hobby.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nama = 'Yessy Nindi Pratiwi';
  alamat = 'Semanggi Barat No 6 ';

  tanggal = Date.now();

  hby: any[];
  constructor(private hobbyServ:HobbyService){}

  ngOnInit() {
    this.hby = this.hobbyServ.getYessy();
    
  }
}
