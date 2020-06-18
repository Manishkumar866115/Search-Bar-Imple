import { NgModule , OnInit} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesContainerComponent } from './movies-container/movies-container.component';
import { FirstComponent } from './first/first.component';

const routes: Routes = [
  { path : 'api/search/:id' , component : MoviesContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
