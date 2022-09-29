import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { Ups } from '../ups.model';
import { UpsService } from '../ups.service';

@Component({
  selector: 'app-ups-list',
  templateUrl: './ups-list.component.html',
  styleUrls: ['./ups-list.component.css']
})
export class UpsListComponent implements OnInit {


  upses: Ups[] = [];

  display: boolean = false;

  private url = `${environment.URL_API}/ups`;

  constructor(
    private service: UpsService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUps();
  }

  getUps(){
    this.service.getAll()
      .subscribe(
        (res) => {
          this.upses = res;
          console.log(this.upses);
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
              this.getUps();
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
