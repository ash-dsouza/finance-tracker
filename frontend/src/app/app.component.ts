import { Component } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpendWise';
  public showLayout = true;

  onRouteChange(component: any) {
  this.showLayout = !(component instanceof LoginComponent);
}
}
