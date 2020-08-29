import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchPanelComponent } from './launch-panel/launch-panel.component';
import { LaunchFiltersComponent } from './launch-panel/launch-filters/launch-filters.component';
import { LaunchSatellitesComponent } from './launch-panel/launch-satellites/launch-satellites.component';

import { NgxSpinnerModule } from 'ngx-spinner';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchPanelComponent,
    LaunchFiltersComponent,
    LaunchSatellitesComponent,
    PathNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
