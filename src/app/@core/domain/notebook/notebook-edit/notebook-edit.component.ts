import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { getProcesadorDescription, Procesador } from 'src/app/@core/enum/procesador.enum';
import { getStatusDescription, Status } from '../../enums/status.enums';
import { Notebook } from '../notebook.model';
import { NotebookService } from '../notebook.service';

@Component({
  selector: 'app-notebook-edit',
  templateUrl: './notebook-edit.component.html',
  styleUrls: ['./notebook-edit.component.css']
})
export class NotebookEditComponent implements OnInit {

 notebookes = new Notebook();

  isModoEdicion: boolean = false;

  estados = Object.values(Status).map(value => ({ label: getStatusDescription(value), value: value}));
  procesador = Object.values(Procesador).map(value => ({ label: getProcesadorDescription(value), value: value}));

  displayDialog: boolean = false;

  submitted: boolean | undefined;

  ruta = "/notebook";

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: NotebookService,
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
                (notebook) => {
                  this.notebookes = notebook;
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
    this.service.add(this.notebookes)
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
    this.service.update(this.notebookes)
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
