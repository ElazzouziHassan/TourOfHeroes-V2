import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './component/heroes/heroes.component';
import { CrisisComponent } from './component/crisis/crisis.component';
import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';
import { CrisisListComponent } from './pages/crisis-list/crisis-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    CrisisComponent,
    HeroesListComponent,
    CrisisListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
