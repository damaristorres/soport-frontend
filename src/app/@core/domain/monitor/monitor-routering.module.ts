import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitorEditComponent } from './monitor-edit/monitor-edit.component';
import { MonitorListComponent } from './monitor-list/monitor-list.component';

const routes: Routes = [
 
      { path: '', component: MonitorListComponent },
      { path: 'form', component: MonitorEditComponent },
      { path: 'form/:id', component: MonitorEditComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitorRoutingModule {}
