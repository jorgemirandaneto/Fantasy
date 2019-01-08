import { EtapaParticipante } from './../Models/EtapaParticipante';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Participante } from '../Models/Participante';
import { Etapas } from '../Models/Etapas';

const token = localStorage.getItem("jwt");

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class CadastroPontuacaoService {

  private url = 'http://localhost:50929/api/';
  constructor(private http: HttpClient) { }


  addNota(etapaParticipante: EtapaParticipante): Promise<EtapaParticipante> {
    return this.http.post<EtapaParticipante>(this.url + "EtapaParticipante/SalvarNota", etapaParticipante, httpOptions)
      .toPromise()
      .then(res => { return res })
      .catch(erro => { return erro })
  }

  getParticipantes(): Observable<Participante[]> {
    const url = `${this.url + "Participantes"}`;
    return this.http.get<Participante[]>(url, {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json"
      })
    }).pipe(
      tap(heroes => this.log(`participante Listado`)),
      catchError(this.handleError('participante', []))
    )
  }

  getEtapas(): Observable<Etapas[]> {
    const url = `${this.url + 'EtapaParticipante/Etapa'}`;
    return this.http.get<Etapas[]>(url, {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json"
      })
    }).pipe(
      tap(heroes => this.log(`Etapa Listado`)),
      catchError(this.handleError('getEtapas', []))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
  private log(message: string) {
    console.log(message);
  }
}
