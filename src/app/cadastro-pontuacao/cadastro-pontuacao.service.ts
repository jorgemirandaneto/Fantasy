import { EtapaParticipante } from './../Models/EtapaParticipante';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Participante } from '../Models/Participante';
import { Etapas } from '../Models/Etapas';
import {  AlertService, Alert } from 'ngx-alerts';
import { environment } from '../../environments/environment';

const token = localStorage.getItem('jwt');

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class CadastroPontuacaoService {

  private url = environment.url;
  constructor(private http: HttpClient, private alert: AlertService) { }


 async addNota(etapaParticipante: EtapaParticipante): Promise<any> {
     return await this.http.post<EtapaParticipante>(this.url + 'Etapa/SalvarNota', etapaParticipante, httpOptions)
      .toPromise()
      .then(res =>  'true' )
      .catch(erro => erro.error);
    }

  getParticipantes(): Promise<Participante[]> {
    const url = `${this.url + 'Participantes'}`;
    return this.http.get<Participante[]>(url, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    }).toPromise()
    .then(heroes => heroes)
    .catch(x => x);
  }

  getEtapas(): Promise<Etapas[]> {
    const url = `${this.url + 'Etapa/etapas'}`;
    return this.http.get<Etapas[]>(url, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    }).toPromise()
    .then(heroes => heroes)
    .catch(err => err.error);
  }
}
