import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-repairService',
  standalone: true,
  imports: [],
  templateUrl: './repairService.component.html',
  styleUrl: './repairService.component.css',
})
export class RepairServiceComponent implements OnInit {
  repair: any;
  http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/repair').subscribe({
      next: (response) => (this.repair = response),
      error: (error) => console.log(error),
      complete: () => console.log('Request has completed !'),
    });
  }
}
