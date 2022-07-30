import { EditMotoristaComponent } from './lista-motorista/edit-motorista/edit-motorista.component';
import { CriarMotoristaComponent } from './lista-motorista/lista/criar-motorista/criar-motorista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista-motorista/lista/lista.component';

const routes: Routes = [
  {
    path: '',
    component: ListaComponent,
  },
  {
    path: 'criar',
    component: CriarMotoristaComponent,
  },
  {
    path: 'editar',
    component: EditMotoristaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
