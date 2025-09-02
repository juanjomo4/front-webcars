import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-home-page',
  imports: [NavbarComponent, FooterComponent, CardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
