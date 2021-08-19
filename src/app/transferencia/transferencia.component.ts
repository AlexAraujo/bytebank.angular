import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.scss']
})
export class TransferenciaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() aoTransferir = new EventEmitter<any>();

  valor?: number;
  destino?: number;

  transferir() {
    console.log('solicitado nova transferência');
    const valorEmitir = {valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir);
  }
}
