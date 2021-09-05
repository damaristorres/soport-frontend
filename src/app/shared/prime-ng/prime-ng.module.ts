import { NgModule } from '@angular/core';

import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  exports: [
    TableModule,
    FileUploadModule,
    ToolbarModule,
    InputTextModule,
    CardModule,
    ConfirmDialogModule,
  ],
})
export class PrimeNgModule {}
