import { Injectable } from '@angular/core';

export interface AppUser {
  name: string;
  email: string;
}

export interface Location {
  id: number;
  name: string;
  city: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  private users: AppUser[] = [
    { name: 'Pragadees', email: 'pragadees@sterna.com' },
    { name: 'Mohan', email: 'mohan@sterna.com' },
    { name: 'Aishwarya', email: 'aishwarya@sterna.com' },
  ];

  private locations: Location[] = [
    { id: 1, name: 'R S Puram', city: 'Coimbatore' },
    { id: 2, name: 'Gandhipuram', city: 'Coimbatore' },
    { id: 3, name: 'Peelamedu', city: 'Coimbatore' },
    { id: 4, name: 'Saibaba Colony', city: 'Coimbatore' },
    { id: 5, name: 'Race Course', city: 'Coimbatore' }
  ];

  getDashboardItems() {
    return [
      { id: 1, name: 'Auto Door Locking Sysmtem', status: 'Active' },
      { id: 2, name: 'Smart Lock', status: 'Pending' },
      { id: 3, name: 'Smart/Biometric Lock', status: 'Completed' }
    ];
  }

  getLocations(): Location[] {
    return this.locations;
  }

  getUsers(): AppUser[] {
    return this.users;
  }

  isValidUser(email: string): boolean {
    return this.users.some((u) => u.email.toLowerCase() === email.toLowerCase());
  }

  getUserByEmail(email: string): AppUser | undefined {
    return this.users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  }
}
