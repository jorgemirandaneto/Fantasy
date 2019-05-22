import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Devedores } from '../Models/Devedores';

@Injectable()
export class DevedoresService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:5000/api/'

  getDevedores(page: number, qtdItempage:number): Promise<Devedores[]>{
    return this.http.get(`${this.url}/Etapa/Devedores/${page}/${qtdItempage}`)
    .toPromise()
    .then(x => {return x})
    .catch(err => {return err})
  }
}
