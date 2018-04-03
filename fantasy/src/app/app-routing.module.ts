import { TabelaGeralComponent } from './tabela-geral/tabela-geral.component';
import { NotasComponent } from './notas/notas.component';
import { ParticipantesComponent } from './participantes/participantes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabelaParticipatesComponent } from './tabela-participates/tabela-participates.component';

const routes: Routes = [
  { path: 'Participante', component: ParticipantesComponent },
  { path: 'Notas', component: NotasComponent },
  { path: 'TabelaGeral', component: TabelaGeralComponent },
  {path:'TabelaParticipantes',component:TabelaParticipatesComponent},
  { path: 'editParticipante/:id', component: ParticipantesComponent },
  //rota pricipal
  { path: '', pathMatch: 'full', redirectTo: 'TabelaParticipantes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
