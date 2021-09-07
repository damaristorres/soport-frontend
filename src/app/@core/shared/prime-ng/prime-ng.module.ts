import { NgModule } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { RippleModule } from 'primeng/ripple';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  exports: [
    CardModule,
    ConfirmDialogModule,
    InputTextModule,
    MenubarModule,
    MessageModule,
    MessagesModule,
    RippleModule,
    SkeletonModule,
    TableModule,
    ToastModule,
    ToolbarModule,
  ],
})
export class PrimeNgModule {}
