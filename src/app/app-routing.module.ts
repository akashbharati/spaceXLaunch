import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchSatellitesComponent } from './launch-panel/launch-satellites/launch-satellites.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { LaunchPanelComponent } from './launch-panel/launch-panel.component';

const routes: Routes = [
  {
    path: 'launches',
    component: LaunchPanelComponent,
  },
  {
    path: '',
    redirectTo: '/launches',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/launches',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
