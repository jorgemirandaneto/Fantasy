import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Devedores } from '../Models/Devedores';
import { environment } from '../../environments/environment';
import { RootDevedores } from '../Models/RootDevedores';

@Injectable()
export class DevedoresService {

  constructor(private http: HttpClient) { }

  url = environment.url;

  getDevedores(page: number, qtdItempage:number): Promise<RootDevedores[]>{
    return this.http.get(`${this.url}Devedores/list/${page}/${qtdItempage}`)
    .toPromise()
    .then(res => {return res})
    .catch(err => {return err})
  }
}
