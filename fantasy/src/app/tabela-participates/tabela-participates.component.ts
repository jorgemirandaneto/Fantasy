import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { Participante } from '../Models/Participantes';
import { Subject } from 'rxjs/Subject';
import { Location } from '@angular/common';
import { DataTableDirective } from 'angular-datatables';
@Component({
  selector: 'app-tabela-participates',
  templateUrl: './tabela-participates.component.html',
  styleUrls: ['./tabela-participates.component.css'],
  providers: [ServiceService]
})




export class TabelaParticipatesComponent implements OnInit {

  constructor(private participanteService: ServiceService, private router: Router, private location: Location) { }
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();

  participantes: Participante[] = [];

  ngOnInit(): void {
    this.dtOptions = {    
      language: { 'url': '//cdn.datatables.net/plug-ins/1.10.16/i18n/Portuguese-Brasil.json' },
      //pagingType: 'full_numbers',
      pageLength: 10,
      responsive: true
      
    }
    this.getParticipantes();
  }

  getParticipantes() {
    this.participanteService.getParticipante().subscribe(
      p => { this.participantes = p; this.dtTrigger.next(); })
  }

  onNovo() {
    this.router.navigate(["/Participante"]);
  }

  delete(participante: Participante): void {
    console.log(participante.Id);
    if (confirm("Tem certeza de que deseja excluir " + participante.Nome + "?")) {
      let result = this.participanteService.deleteHero(participante)
      result.subscribe(d => this.rerender(),
        err => {
          alert("Não foi possível excluir o Participante.");
        });
    }
  }

  

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      this.getParticipantes();
      dtInstance.destroy();
    });
  }
}
