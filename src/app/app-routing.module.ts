import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { EarthComponent } from './earth/earth.component';
import { MarsComponent } from './mars/mars.component';
import { ExodataComponent } from './exodata/exodata.component';

const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent, runGuardsAndResolvers: 'always'},

{ path: 'earth', component : EarthComponent, runGuardsAndResolvers: 'always'},

{ path: 'mars', component : MarsComponent, runGuardsAndResolvers: 'always'},

{ path: 'exodata', component : ExodataComponent, runGuardsAndResolvers: 'always'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
