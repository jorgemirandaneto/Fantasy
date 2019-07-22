import { CadastroPontuacaoComponent } from './cadastro-pontuacao/cadastro-pontuacao.component';
import { LoginComponent } from './login/login.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { TabelaParticipatesComponent } from './tabela-participates/tabela-participates.component';
import { NotasEtapasComponent } from './notas-etapas/notas-etapas.component';
import { ParticipantesComponent } from './participantes/participantes.component';
import { AuthGuard } from './AuthGuard';
import { JwtHelper } from '../../node_modules/angular2-jwt';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DevedoresComponent } from './devedores/devedores.component';


const routes: Routes = [
  { path: 'dashboard', component:  DashboardComponent,canActivate: [AuthGuard]},
  { path: 'NotasEtapas', component:  NotasEtapasComponent},
  { path: 'createParticipante', component:  ParticipantesComponent,canActivate: [AuthGuard]},
  {path:'TabelaParticipantes',component:TabelaParticipatesComponent,canActivate: [AuthGuard] },
  { path: 'editParticipante/:id', component: ParticipantesComponent,canActivate:[AuthGuard] },
  {path:'CadastroPontuacao', component:CadastroPontuacaoComponent, canActivate:[AuthGuard]},
  {path:'Devedores', component:DevedoresComponent, canActivate:[AuthGuard]},
  {path:'Login',component:LoginComponent},
  //rota pricipal
  { path: 'Login', pathMatch: 'full', redirectTo: 'Login' },
  { path: '', pathMatch: 'full', redirectTo: 'Login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
exports: [RouterModule],
  providers:[AuthGuard,JwtHelper]
})
export class AppRoutingModule { }