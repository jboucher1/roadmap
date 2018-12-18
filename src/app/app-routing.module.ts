import { LogoutComponent } from './components/logout/logout.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoadtripListComponent } from './components/roadtrip-list/roadtrip-list.component';
import { RoadtripComponent } from './components/roadtrip/roadtrip.component';
import { RoadtripDestinationsComponent } from './components/roadtrip-destinations/roadtrip-destinations.component';
import { RoadtripDestinationComponent } from './components/roadtrip-destination/roadtrip-destination.component';

const roadtripChildren: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'all', component: RoadtripDestinationsComponent },
  { path: 'destination/:id', component: RoadtripDestinationComponent }
];

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'list', component: RoadtripListComponent },
  { path: 'roadtrip/:roadtrip_name', component: RoadtripComponent, children: roadtripChildren }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
