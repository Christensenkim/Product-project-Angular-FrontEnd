import { Component } from '@angular/core';
import {AuthenticationService} from 'src/app/Shared/Service/authentication.service';
import {Product} from './Shared/Models/Products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthenticationService) {
  }

  lougout(): void {
    this.authService.logout();
  }
}
