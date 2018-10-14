import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators/tap';
import { catchError } from 'rxjs/operators';
import { EtapaParticipante } from '../Models/EtapaParticipante';
import { Etapas } from '../Models/Etapas';

@Injectable()
export class ServiceNotasEtapasService {
  token = localStorage.getItem("jwt");
  private headers = new HttpHeaders({
    "Authorization": "Bearer " + this.token,
    "Content-Type": "application/json"
  });
  private url = 'http://localhost:50929/api/EtapaParticipante/';
  constructor(private http: HttpClient) { }


  getEtapaParticipante(id: number): Observable<EtapaParticipante[]> {
    const url = `${this.url + 'NotasEtapas?idEtapa='}${id}`;
    return this.http.get<EtapaParticipante[]>(url, {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + this.token,
        "Content-Type": "application/json"
      })
    }).pipe(
      tap(heroes => this.log(`EtapaParticipante Listado`)),
      catchError(this.handleError('getEtapaParticipante', []))
    );
  }

  getEtapas(): Observable<Etapas[]> {
    const url = `${this.url + 'Etapa'}`;
    return this.http.get<Etapas[]>(url, {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + this.token,
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
