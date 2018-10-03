import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { EventListPageComponent } from './pages/event-list-page/event-list-page.component';
import { EventDetailPageComponent } from './pages/event-detail-page/event-detail-page.component';
import { LoadingComponent } from './components/loading/loading.component';



const routes: Routes = [
  { path: '', component: EventListPageComponent },
  { path: 'events/:id', component: EventDetailPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EventListPageComponent,
    EventDetailPageComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
