import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Participante } from '../Models/Participante';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';


const token = localStorage.getItem("jwt");
const httpOptions = {
  headers: new HttpHeaders({
    "Authorization": "Bearer " + token,
    "Content-Type": "application/json"
  })
}

@Injectable()
export class DropdownlistParticipanteService {
  token = localStorage.getItem("jwt");
  private headers = new HttpHeaders({
    "Authorization": "Bearer " + this.token,
    "Content-Type": "application/json"
  });
  private url = 'http://localhost:50929/api/Participantes/';
  constructor(private http: HttpClient) { }

  getEtapas(): Observable<Participante[]> {
    const url = `${this.url + 'Etapa'}`;
    return this.http.get<Participante[]>(url, httpOptions).pipe(
      tap(heroes => this.log(`participante Listado`)),
      catchError(this.handleError('participante', []))
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
