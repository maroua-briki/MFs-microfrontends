import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';




@Component({
  selector: 'planning-microfrontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private authService:AuthService){}
  
  ngOnInit(): void {
    this.authService.saveToken();
  }
  title = 'planning-microfrontend';
  showSidebar: boolean = true;
  isLoading: boolean=true;
}
