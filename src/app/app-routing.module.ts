import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteComponent } from './favourite/favourite.component';
import { HomeComponent } from './home/home.component';
import { RecentsearchComponent } from './recentsearch/recentsearch.component';



const routes: Routes = [
   { path: '', component: HomeComponent },
    { path: 'favourite', component: FavouriteComponent },
     { path: 'recent', component: RecentsearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
