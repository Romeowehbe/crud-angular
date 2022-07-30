import { Component, OnInit } from '@angular/core';
import { ListaService } from 'src/app/shared/service/lista.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-motorista',
  templateUrl: './edit-motorista.component.html',
  styleUrls: ['./edit-motorista.component.css'],
})
export class EditMotoristaComponent implements OnInit {
  motoristaId: any;
  motorista: any;
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.motoristaId = Number(routeParams.get('motoristaId'));
    console.log(this.motoristaId);
    //this.ListaService.editLista(this.motoristaId).subscribe((data:any)=>{
    //this.motorista = data;
    console.log(this.motorista);
  }
}

//update(motoristaNome:string, motoristaCpf:string, motoristaCnh:string){

//}
