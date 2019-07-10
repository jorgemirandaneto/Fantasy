import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Devedores } from '../Models/Devedores';
import { environment } from '../../environments/environment';

@Injectable()
export class DevedoresService {

  constructor(private http: HttpClient) { }

  url = environment.url;

  getDevedores(page: number, qtdItempage:number): Promise<Devedores[]>{
    return this.http.get(`${this.url}/Etapa/Devedores/${page}/${qtdItempage}`)
    .toPromise()
    .then(x => {return x})
    .catch(err => {return err})
  }
}
