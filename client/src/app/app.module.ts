import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule,Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './register/register.component';
import { ValidateService } from './services/validate.service';
import {AuthService} from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';

const appRoutes:Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:DashboardComponent},
  {path:'register', component:RegisterComponent},
  {path:'profile',component:ProfileComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ValidateService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
