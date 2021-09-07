import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-skeleton',
  templateUrl: './table-skeleton.component.html',
  styles: [],
})
export class TableSkeletonComponent implements OnInit {
  @Input() headers: string[] = [];
  @Input() columnCount: number = 1;
  rows: null[] = [];
  constructor() {}

  ngOnInit(): void {
    this.headers.push('');
    for (let i = 0; i < this.columnCount; i++) {
      this.rows.push(null);
    }
  }
}
