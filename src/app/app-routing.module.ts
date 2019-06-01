import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewSeriesComponent } from './series/view-series/view-series.component';
import { AddSeriesComponent } from './series/add-series/add-series.component';
import { DeleteSeriesComponent } from './series/delete-series/delete-series.component';
import { UpdateSeriesComponent } from './series/update-series/update-series.component';

const routes: Routes = [
  {path:"series", component:ViewSeriesComponent},
  {path:"series/add", component:AddSeriesComponent},
  {path:"series/delete/:id", component:DeleteSeriesComponent},
  {path:"series/update/:id", component:UpdateSeriesComponent},
  {path:"", redirectTo:'/series', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
