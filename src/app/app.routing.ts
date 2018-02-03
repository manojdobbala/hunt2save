import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const appRouting: Routes = [
  {
    path: '',
    component : HomeComponent
  },
  {
    path: 'login',
    component : LoginComponent
  }
]

export const AppRouting = RouterModule.forRoot(appRouting);
