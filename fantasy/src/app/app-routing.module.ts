import { LoginComponent } from './login/login.component';
import { TabelaGeralComponent } from './tabela-geral/tabela-geral.component';
import { NotasComponent } from './notas/notas.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabelaParticipatesComponent } from './tabela-participates/tabela-participates.component';
import { ParticipantesComponent } from './participantes/participantes.component';
import { AuthGuard } from './AuthGuard';
import { JwtHelper } from '../../node_modules/angular2-jwt';

const routes: Routes = [
  { path: 'createParticipante', component:  ParticipantesComponent,canActivate: [AuthGuard]},
  { path: 'Notas', component: NotasComponent ,canActivate:[AuthGuard]},
  { path: 'TabelaGeral', component: TabelaGeralComponent,canActivate:[AuthGuard] },
  {path:'TabelaParticipantes',component:TabelaParticipatesComponent,canActivate: [AuthGuard] },
  { path: 'editParticipante/:id', component: ParticipantesComponent,canActivate:[AuthGuard] },
  {path:'Login',component:LoginComponent},
  //rota pricipal
  { path: '', pathMatch: 'full', redirectTo: 'Login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard,JwtHelper]
})
export class AppRoutingModule { }
