import { TabelaGeralComponent } from './tabela-geral/tabela-geral.component';
import { NotasComponent } from './notas/notas.component';
import { ParticipantesComponent } from './participantes/participantes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'Participante', component: ParticipantesComponent },
  { path: 'Notas', component: NotasComponent },
  { path: 'TabelaGeral', component: TabelaGeralComponent },
  //rota pricipal
  { path: '', pathMatch: 'full', redirectTo: 'TabelaGeral' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
