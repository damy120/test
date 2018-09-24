import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component'
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service'
import { AuthGuard } from './auth.guard';
import { UserService } from './user.service'
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'logout',
        component: LogoutComponent
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '',
        component: HomeComponent
      }
    ])
  ],
  providers: [AuthService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
