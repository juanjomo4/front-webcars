import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

@Component({
  selector: 'app-root',
  imports: [HomePageComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'front-webcars';
}
