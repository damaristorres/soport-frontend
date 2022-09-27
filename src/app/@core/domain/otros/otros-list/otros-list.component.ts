import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { Otros } from '../otros.model';
import { OtrosesService } from '../otros.service';

@Component({
  selector: 'app-otros-list',
  templateUrl: './otros-list.component.html',
  styleUrls: ['./otros-list.component.css']
})
export class OtrosListComponent implements OnInit {

  otroses: Otros[] = [];

  display: boolean = false;

  private url = `${environment.URL_API}/otros`;

  constructor(
    private service: OtrosesService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getOtros();
  }

  getOtros(){
    this.service.getAll()
      .subscribe(
        (res) => {
          this.otroses = res;
          console.log(this.otroses);
        },
        (err) => {
          console.error(err);
        }
      )
  }

  getEventValue(event: any){
    return (event.target as HTMLInputElement).value;
  }

  delete(id: any) {
    this.confirmationService.confirm({
      message: 'Está seguro que desea eliminar?',
      accept: () => {
        this.service.delete(id)
          .subscribe(
            (res) => {
              this.getOtros();
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
}
