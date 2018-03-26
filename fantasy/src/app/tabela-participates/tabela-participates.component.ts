import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { Participante } from '../Models/Participantes';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-tabela-participates',
  templateUrl: './tabela-participates.component.html',
  styleUrls: ['./tabela-participates.component.css'],
  providers:[ServiceService]
})




export class TabelaParticipatesComponent implements OnInit {

  constructor(private http: ServiceService, private router: Router) { }

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  participantes: Participante[] = []  ;

  ngOnInit(): void {
    this.dtOptions = {
      language: {'url': '//cdn.datatables.net/plug-ins/1.10.16/i18n/Portuguese-Brasil.json'},
      pagingType: 'full_numbers',
      pageLength: 2      
  }
    this.http.getParticipante().subscribe(
      p => {this.participantes = p; this.dtTrigger.next();})    
 

    }
  onNovo(){
    this.router.navigate(["/Participante"]);
  }
}
