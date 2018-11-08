import { EtapaParticipante } from './../Models/EtapaParticipante';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

const token = localStorage.getItem("jwt");

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    "Authorization": "Bearer " + this.token,
  })
};

@Injectable()
export class CadastroPontuacaoService {
  FF

  private url = 'http://localhost:50929/api/EtapaParticipante/';
  constructor(private http: HttpClient) { }


  addNota(etapaParticipante: EtapaParticipante): Observable<EtapaParticipante> {
    return this.http.post<EtapaParticipante>(this.url, etapaParticipante, httpOptions).pipe(
      tap((etapaParticipante: EtapaParticipante) => this.log(`added participante id=${etapaParticipante}`)),
      catchError(this.handleError('addParticipante', etapaParticipante))
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
