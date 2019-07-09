import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Etapas } from '../Models/Etapas';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { environment } from '../../environments/environment';

@Injectable()
export class ServiceDdlEtapasService {

  token = localStorage.getItem("jwt");
  private headers = new HttpHeaders({
    "Authorization": "Bearer " + this.token,
    "Content-Type": "application/json"
  });
  private url = environment.url;
  constructor(private http: HttpClient) {
}


getEtapas(): Observable < Etapas[] > {
  const url = `${this.url + 'Etapa/etapas'}`;
  return this.http.get<Etapas[]>(url, {
    headers: new HttpHeaders({
      //"Authorization": "Bearer " + this.token,
      "Content-Type": "application/json"
    })
  }).pipe(
    tap(heroes => this.log(`Etapa Listado`)),
    catchError(this.handleError('getEtapas', []))
  )
}

  private handleError<T>(operation = 'operation', result ?: T) {
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
