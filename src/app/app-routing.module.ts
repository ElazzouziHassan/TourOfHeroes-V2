import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';
import { CrisisListComponent } from './pages/crisis-list/crisis-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'crisis', title:'Tour Of Heroes | Crisis', component: CrisisListComponent},
  {path: 'heroes', title:'Tour Of Heroes | Heroes', component: HeroesListComponent},
  {path: '', redirectTo: 'heroes', pathMatch: 'full'},
  {path: '**', title:'Error ! | Page Not Found', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
