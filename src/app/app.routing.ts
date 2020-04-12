import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

import { UserComponent } from './user/user.component';
import { HomeComponent } from './user/home/home.component';
import { ListcovidComponent } from './user/listcovid/listcovid.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormdaftarComponent } from './formdaftar/formdaftar.component';
import { ListAllComponent } from './material-component/list-all/list-all.component';


export const AppRoutes: Routes = [
  {
    
      path: '',
      component : HomepageComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'user',
      component: UserComponent
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'form',
      component: FormdaftarComponent
    },
    {
      path: 'list',
      component: ListcovidComponent
    },
    {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
  
];
