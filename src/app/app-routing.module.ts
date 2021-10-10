import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngridientsComponent } from './ingridients/ingridients.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'ingridients', component: IngridientsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
