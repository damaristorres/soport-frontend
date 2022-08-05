import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotebookEditComponent } from './notebook-edit/notebook-edit.component';
import { NotebookListComponent } from './notebook-list/notebook-list.component';

const routes: Routes = [
 
      { path: '', component: NotebookListComponent },
      { path: 'form', component: NotebookEditComponent },
      { path: 'form/:id', component: NotebookEditComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotebookRoutingModule {}
