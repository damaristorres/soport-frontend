import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DepositoService } from '../../deposito/deposito.service';
import { switchMap, tap } from 'rxjs/operators';
import { ComputadoraService } from '../computadora.service';
import { Computadora } from '../computadora.model';
import { getStatusDescription, Status } from '../../enums/status.enums';
import { getProcesadorDescription, Procesador } from 'src/app/@core/enum/procesador.enum';
import { getTipoDescription, Tipo } from 'src/app/@core/enum/tipo.enum';


@Component({
  selector: 'app-computadora-edit',
  templateUrl: './computadora-edit.component.html',
  styleUrls: ['./computadora-edit.component.css']
})
export class ComputadoraEditComponent implements OnInit {
  
  computadoras = new Computadora();

  isModoEdicion: boolean = false;

  estados = Object.values(Status).map(value => ({ label: getStatusDescription(value), value: value}));
  procesador = Object.values(Procesador).map(value => ({ label: getProcesadorDescription(value), value: value}));
  tipo = Object.values(Tipo).map(value => ({ label: getTipoDescription(value), value: value}));

  displayDialog: boolean = false;

  submitted: boolean | undefined;

  ruta = "/computadora";

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
                  this.computadoras = computadora;
                },
                (error) => {
                  console.log("error al cargar " + error);
                }
              )
          } 
        }
      )
  }

  add() {
    this.service.add(this.computadoras)
      .subscribe(
        () => {
          this.returnToList();
        },
        (error) => {
          console.error(error)
        }
      )
  }

  update() {
    this.service.update(this.computadoras)
      .subscribe(
        () => {
          this.returnToList();
        },
        (erro) => {
          console.error("Eror al actualizar " + erro);
        }
      )
  }

  returnToList() {
    this.router.navigate([this.ruta]);
  }

}
