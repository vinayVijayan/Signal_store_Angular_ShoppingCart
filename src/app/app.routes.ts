import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Ngconentex } from './ngconentex/ngconentex';

export const routes: Routes = [
    { 
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full' 
  },
  { 
    path: 'login', 
    component: Login 
  },
   { 
    path: 'alert', 
    component: Ngconentex 
  },
];
