import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Responsabilidad, getResponsabilidadDescription } from 'src/app/@core/enum/responsabilidad.enum';
import { getStatusDescription, Status } from '../../enums/status.enums';
import { Otros } from '../otros.model';
import { OtrosesService } from '../otros.service';

@Component({
  selector: 'app-otros-edit',
  templateUrl: './otros-edit.component.html',
  styleUrls: ['./otros-edit.component.css']
})
export class OtrosEditComponent implements OnInit {

 otroses = new Otros();

  isModoEdicion: boolean = false;

  estados = Object.values(Status).map(value => ({ label: getStatusDescription(value), value: value}));
  responsabilidades = Object.values(Responsabilidad).map(value => ({ label: getResponsabilidadDescription(value), value: value}));

  displayDialog: boolean = false;

  submitted: boolean | undefined;

  ruta = "/otros";

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: OtrosesService,
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
                (teclado) => {
                  this.otroses = teclado;
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
    this.service.add(this.otroses)
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
    this.service.update(this.otroses)
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
