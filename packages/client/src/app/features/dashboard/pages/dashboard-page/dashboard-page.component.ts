import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  public constructor(private readonly _dashboardService: DashboardService) {}
  public ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
