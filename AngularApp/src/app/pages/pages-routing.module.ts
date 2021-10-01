import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ModuleOneComponent } from './module-one/module-one.component';
import { AuthGuard } from '../shared/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'one',
        loadChildren: () => import('./module-one/module-one.module').then(m => m.ModuleOneModule),

      },
      {
        path: 'two',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'one',
        loadChildren: () => import('./module-one/module-one.module').then(m => m.ModuleOneModule),
      },
      {
        path: 'two',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
