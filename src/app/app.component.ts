import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { TransferenciasService } from './services/transferencias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private service: TransferenciasService) {}

  transferir($event: any) {
    this.service.adicionar($event);
  }
}
