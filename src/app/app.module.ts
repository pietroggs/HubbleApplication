import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RecoveryPassComponent } from './recovery-pass/recovery-pass.component';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHomeOneComponent } from './home/page-home-one/page-home-one.component';
import { PageHomeTwoComponent } from './home/page-home-two/page-home-two.component';
import { PageHomeThreeComponent } from './home/page-home-three/page-home-three.component';
import { PageHomeFourComponent } from './home/page-home-four/page-home-four.component';
import { PageHomeFiveComponent } from './home/page-home-five/page-home-five.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RecoveryPassComponent,
    ErrorNotFoundComponent,
    DashboardComponent,
    PageHomeOneComponent,
    PageHomeTwoComponent,
    PageHomeThreeComponent,
    PageHomeFourComponent,
    PageHomeFiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
