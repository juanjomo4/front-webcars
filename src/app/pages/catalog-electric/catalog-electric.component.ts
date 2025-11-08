import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ListCardsComponent } from "../../components/list-cards/list-cards.component";

@Component({
  selector: 'app-catalog-electric',
  imports: [NavbarComponent, ListCardsComponent],
  templateUrl: './catalog-electric.component.html',
  styleUrl: './catalog-electric.component.css'
})
export class CatalogElectricComponent {

}
