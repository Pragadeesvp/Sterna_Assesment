import { Component, OnInit } from '@angular/core';
import { DataService, Location } from '../services/data.service';

@Component({
  selector: 'app-location',
  standalone: false,
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent implements OnInit {
  locations: Location[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.locations = this.dataService.getLocations();
  }
}
