import { Component, OnInit } from '@angular/core';
import { ListaService } from 'src/app/shared/service/lista.service';

@Component({
  selector: 'app-criar-motorista',
  templateUrl: './criar-motorista.component.html',
  styleUrls: ['./criar-motorista.component.css'],
})
export class CriarMotoristaComponent implements OnInit {
  ngOnInit() {}

  constructor(private listaService: ListaService) {}

  motoristas:any;
  add(motoristaNome:string, motoristaCpf:string, motoristaCnh:string){
    this.motoristas = {
      'nome' : motoristaNome,
      'cpf' : motoristaCpf,
      'cnh' : motoristaCnh
    };
    this.listaService.insertLista(this.motoristas as any).subscribe(motorista=>{
      this.motoristas = motorista
    });
    console.log(this.motoristas);
  }
}
