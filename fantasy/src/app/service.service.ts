
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Participante } from './Models/Participantes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class ServiceService {


  private HttpUrl = "http://localhost:52372/api/Participantes";


  constructor(private http: HttpClient, private https: Http) { }
  //Pegando todos os Participantes
  getParticipante(): Observable<Participante[]> {
    return this.http.get<Participante[]>(this.HttpUrl).pipe(
      tap(heroes => this.log(`fetched heroes`)),
      catchError(this.handleError('getHeroes', []))
    );
  }

  //Salvando Participantes
  // addParticipante(participante: Participante): Observable<Participante> {
  //   return this.http.post<Participante>(this.HttpUrl, participante, httpOptions).pipe(
  //     tap((participante: Participante) => this.log(`adicionado participante w\ id=${participante.Id}`)),
  //     catchError(this.handleError<Participante>('addParticipante'))
  //   )
  // }

  addParticipante(participante) {
    let body = JSON.stringify(participante);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.https.post(this.HttpUrl, body, httpOptions).map(res => res.json());
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

