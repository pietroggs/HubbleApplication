import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [IsLoggedGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [IsLoggedGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    // canActivate: [IsNotLoggedGuard],
  },
  {
    // Qualquer rota que não esteja acima
    path: '**',
    component: ErrorNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
