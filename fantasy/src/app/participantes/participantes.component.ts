import { ServiceService } from './../service.service';
import { Participante } from './../Models/Participantes';
import { AlertModule } from 'ngx-bootstrap';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertService } from 'ngx-alerts';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css'],
  providers: [ServiceService]
})
export class ParticipantesComponent implements OnInit {

  @Input() participante: Participante = new Participante();
  formParticipante: FormGroup;
  public loading = false;
  constructor(private router: Router,
    private location: Location,
    private service: ServiceService,
    private route: ActivatedRoute,
    private alertService: AlertService) { }

  ngOnInit() {
    this.getParticipanteEdit();
  }

  onSalvarParticipante(form) {    
    let result;
    let participanteValue = form.value;
    if (form.status === "VALID") {
      this.loading = true;
      if (participanteValue.Id) {
        result = this.service.updateParticipante(participanteValue);
        result.subscribe(data => this.alertService.success('Participante alterado com sucesso!'), this.onVoltar(), this.loading = false)
      } else {
        result = this.service.addParticipante(participanteValue);
        result.subscribe(data => this.alertService.success('Participante salvo com sucesso!'), this.loading = false)
        form.reset();
      }
    } else {
      console.log(form)      
    }
  }

  getParticipanteEdit() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id > 0) {
      this.service.getParticipanteId(id)
        .subscribe(p => this.participante = p);
    }
  }
  onVoltar() {
    this.router.navigate(['TabelaParticipantes']);
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
