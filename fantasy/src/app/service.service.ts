
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { Participate } from './Models/Participantes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class ServiceService {


  private HttpUrl = "http://www.mocky.io/v2/5aa204a02f0000cc12d46309";

  constructor(private http: Http) { }
  getParticipante() {
    return this.http.get(this.HttpUrl)
    .map(res => res.json());
  }
}
