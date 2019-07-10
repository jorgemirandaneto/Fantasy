import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators/tap';
import { catchError } from 'rxjs/operators';
import { EtapaParticipante } from '../Models/EtapaParticipante';
import { Etapas } from '../Models/Etapas';
import { AlertService } from 'ngx-alerts';
import { environment } from '../../environments/environment';

@Injectable()
export class ServiceNotasEtapasService {
  token = localStorage.getItem("jwt");
  private headers = new HttpHeaders({
    "Authorization": "Bearer " + this.token,
    "Content-Type": "application/json"
  });
  private url = environment.url;
  constructor(private http: HttpClient, private alert: AlertService) { }


  getEtapaParticipante(id: number): Observable<EtapaParticipante[]> {
    const url = `${this.url + 'Etapa/NotasEtapas/'}${id}`;
    return this.http.get<EtapaParticipante[]>(url, {
      headers: new HttpHeaders({
        // "Authorization": "Bearer " + this.token,
        "Content-Type": "application/json"
      })
    }).pipe(
      tap(heroes => this.log(`EtapaParticipante Listado`)),
      catchError(this.handleError('getEtapaParticipante', []))
    );
  }

  getEtapas(): Observable<Etapas[]> {
    const url = `${this.url + 'Etapa/etapas'}`;
    return this.http.get<Etapas[]>(url, {
      headers: new HttpHeaders({
        // "Authorization": "Bearer " + this.token,
        "Content-Type": "application/json"
      })
    }).pipe(
      tap(heroes => this.log(`Etapa Listado`)),
      catchError(this.handleError('getEtapas', []))
    )
  }

  
 async FinalizarEtapa(idEtapa: number): Promise<any>{
  return await this.http.post<EtapaParticipante>(this.url + "Etapa/FinalizarEtapa/"+ idEtapa,{
    headers: new HttpHeaders({
      // "Authorization": "Bearer " + this.token,
      "Content-Type": "application/json"
    })
  })
   .toPromise()
   .then(res => { return this.alert.success('Etapa finalizada com sucesso.') })      
   .catch(erro => {return this.alert.danger(erro.error)})
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
