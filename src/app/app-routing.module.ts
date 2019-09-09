import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PunchListComponent } from './main/punchList/punchList.component';


const routes: Routes = [
  { path: "punchList", component: PunchListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
