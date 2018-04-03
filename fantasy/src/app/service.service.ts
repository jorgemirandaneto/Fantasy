
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


  private HttpUrl = "http://fantasy.apphb.com/api/Participantes";


  constructor(private http: HttpClient) { }
  //Pegando todos os Participantes
  getParticipante(): Observable<Participante[]> {
    return this.http.get<Participante[]>(this.HttpUrl).pipe(
      tap(heroes => this.log(`Participante Listado`)),
      catchError(this.handleError('getParticipante', []))
    );
  }

  addParticipante(participante: Participante): Observable<Participante> {
    return this.http.post<Participante>(this.HttpUrl, participante, httpOptions).pipe(
        tap((participante: Participante) => this.log(`added participante id=${participante.Id}`)),
        catchError(this.handleError('addParticipante', participante))
      );
  }

  updateParticipante(participante: Participante): Observable<Participante> {
    const url = `${this.HttpUrl}/${participante.Id}`;
    return this.http.put<Participante>(url, participante, httpOptions).pipe(
        tap((participante: Participante) => this.log(`added participante id=${participante.Id}`)),
        catchError(this.handleError('addParticipante', participante))
      );
  }

  deleteHero(participante: Participante | number): Observable<Participante> {
    const id = typeof participante === 'number' ? participante : participante.Id;
    const url = `${this.HttpUrl}/${id}`;

    return this.http.delete<Participante>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted participante id=${id}`)),
      catchError(this.handleError<Participante>('deleteParticipante'))
    );
  }

  getParticipanteId(id: number): Observable<Participante> {
    const url = `${this.HttpUrl}/${id}`;
    return this.http.get<Participante>(url).pipe(
      tap(p => this.log(`participante buscado id=${id}`)),
      catchError(this.handleError<Participante>(`Participante id=${id}`))
    );
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

