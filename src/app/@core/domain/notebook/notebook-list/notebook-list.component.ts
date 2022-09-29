import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { Notebook } from '../notebook.model';
import { NotebookService } from '../notebook.service';

@Component({
  selector: 'app-notebook-list',
  templateUrl: './notebook-list.component.html',
  styleUrls: ['./notebook-list.component.css']
})
export class NotebookListComponent implements OnInit {

  notebookes: Notebook[] = [];

  display: boolean = false;

  private url = `${environment.URL_API}/notebook`;

  constructor(
    private service: NotebookService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getNotebookes();
  }

  getNotebookes(){
    this.service.getAll()
      .subscribe(
        (res) => {
          this.notebookes = res;
          console.log(this.notebookes);
        },
        (err) => {
          console.error(err);
        }
      )
  }

  delete(id: any) {
    this.confirmationService.confirm({
      message: 'Está seguro que desea eliminar?',
      accept: () => {
        this.service.delete(id)
          .subscribe(
            (res) => {
              this.getNotebookes();
            },
            (error) => {
              this.display = true;
            }
          )
      },
      acceptLabel: "Confirmar",
      acceptButtonStyleClass: "p-button-danger p-mr-2"
    });
  }

  getEventValue(event: any){
    return (event.target as HTMLInputElement).value;
  }

}
