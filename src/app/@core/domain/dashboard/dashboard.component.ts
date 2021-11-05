import { AfterViewInit, Component, OnInit } from '@angular/core';
import {ChartModule} from 'primeng/chart';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  data: any;

  constructor(
  ) { }


  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }



}
