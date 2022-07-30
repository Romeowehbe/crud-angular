import { ListaService } from './../../../shared/service/lista.service';
import { Component, OnInit } from '@angular/core';

export interface ListaMotorista {
  nome: string;
  id: number;
  cpf: string;
  cnh: string;
}

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css'],
})
export class ListagemComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'cnh', 'acoes'];
  dataSource = [];
  motoristas: any;

  constructor(private listaService: ListaService) {}

  ngOnInit(): void {
    this.listMotoristaData();
  }

  listMotoristaData() {
    this.listaService.getLista().subscribe((result) => {
      this.motoristas = result;
      this.dataSource = this.motoristas;
      console.log(this.dataSource);
    });
  }
}
