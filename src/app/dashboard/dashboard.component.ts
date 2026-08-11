import { Component, OnInit } from '@angular/core';
import { AppUser, DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  items: any[] = [];
  currentUser?: AppUser;
  totalLocations = 0;
  totalUsers = 0;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.items = this.dataService.getDashboardItems();
    this.totalLocations = this.dataService.getLocations().length;
    this.totalUsers = this.dataService.getUsers().length;

    const email = localStorage.getItem('userEmail') ?? '';
    this.currentUser = this.dataService.getUserByEmail(email);
  }
}
