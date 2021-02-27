import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardNavComponent } from './dashboard-nav/dashboard-nav.component';

@NgModule({
  declarations: [DashboardComponent, DashboardNavComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
