import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  constructor(private http: HttpClient) {}

  onStartScan(): void {
    this.http.post('https://localhost:7169/api/start-scan', {}).subscribe({
      next: (response) => {
        console.log('Scan started successfully:', response);
      },
      error: (error) => {
        console.error('Error starting scan:', error);
      }
    });
  }

  onStopScan(): void {
    this.http.post('https://localhost:7169/api/stop-scan', {}).subscribe({
      next: (response) => {
        console.log('Scan started successfully:', response);
      },
      error: (error) => {
        console.error('Error starting scan:', error);
      }
    });
  }
}
