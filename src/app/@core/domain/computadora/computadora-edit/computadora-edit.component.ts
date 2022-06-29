import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DepositoService } from '../../deposito/deposito.service';
import { switchMap, tap } from 'rxjs/operators';
import { ComputadoraService } from '../computadora.service';
import { Computadora } from '../computadora.model';


@Component({
  selector: 'app-computadora-edit',
  templateUrl: './computadora-edit.component.html',
  styleUrls: ['./computadora-edit.component.css']
})
export class ComputadoraEditComponent implements OnInit {
  
  computadora = new Computadora();

  isModoEdicion: boolean = false;

  displayDialog: boolean = false;

  submitted: boolean | undefined;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: ComputadoraService,
    private confirmationService: ConfirmationService

  ) { }

  ngOnInit(): void {
    this.getData();
  }

  
  getData() {
    this.activatedRoute.paramMap
      .subscribe(
        (paramMap) => {
          const id = paramMap.get('id');

          if (id) {
            this.isModoEdicion = true;
            this.service.getById(id)
              .subscribe(
                (computadora) => {
                  this.computadora = computadora;
                },
                (error) => {
                  console.log("error al cargar " + error);
                }
              )
          } 
        }
      )
  }

}
