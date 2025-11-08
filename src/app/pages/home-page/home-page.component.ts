import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CardComponent } from "../../components/card/card.component";
import { LandingSplashParallaxComponent } from "../../components/landing-splash-parallax/landing-splash-parallax.component";

@Component({
  selector: 'app-home-page',
  imports: [NavbarComponent, FooterComponent, CardComponent, LandingSplashParallaxComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  
}
