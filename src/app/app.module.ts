import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { HomeComponent } from './home/home.component';
import { PageHomeFiveComponent } from './home/page-home-five/page-home-five.component';
import { PageHomeFourComponent } from './home/page-home-four/page-home-four.component';
import { PageHomeOneComponent } from './home/page-home-one/page-home-one.component';
import { PageHomeThreeComponent } from './home/page-home-three/page-home-three.component';
import { PageHomeTwoComponent } from './home/page-home-two/page-home-two.component';
import { LoginComponent } from './login/login.component';
import { RecoveryPassComponent } from './recovery-pass/recovery-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RecoveryPassComponent,
    ErrorNotFoundComponent,
    PageHomeOneComponent,
    PageHomeTwoComponent,
    PageHomeThreeComponent,
    PageHomeFourComponent,
    PageHomeFiveComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
