
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { Participante } from './Models/Participantes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class ServiceService {


  private HttpUrl = "https://fantasywebapi.azurewebsites.net/api/Participantes";

 
  constructor(private http: HttpClient) { }
   //Pegando todos os Participantes
  getParticipante(): Observable<Participante[]> {
    return this.http.get<Participante[]>(this.HttpUrl).pipe(
      tap(heroes => this.log(`fetched heroes`)),
      catchError(this.handleError('getHeroes', []))
    );
  }

  //Salvando Participantes
  addParticipante(participante: Participante): Observable<Participante> {
    return this.http.post<Participante>(this.HttpUrl, participante, httpOptions).pipe(
      tap((participante: Participante) => this.log(`adicionado participante w\ id=${participante.Id}`)),
      catchError(this.handleError<Participante>('addParticipante'))
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

