import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { getStatusDescription, Status } from '../../enums/status.enums';
import { Ups } from '../ups.model';
import { UpsService } from '../ups.service';

@Component({
  selector: 'app-ups-edit',
  templateUrl: './ups-edit.component.html',
  styleUrls: ['./ups-edit.component.css']
})
export class UpsEditComponent implements OnInit {

 upses = new Ups();

  isModoEdicion: boolean = false;

  estados = Object.values(Status).map(value => ({ label: getStatusDescription(value), value: value}));

  displayDialog: boolean = false;

  submitted: boolean | undefined;

  ruta = "/ups";

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: UpsService,
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
                (ups) => {
                  this.upses = ups;
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
    this.service.add(this.upses)
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
    this.service.update(this.upses)
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
