import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ListCardsComponent } from "../../components/list-cards/list-cards.component";

@Component({
  selector: 'app-catalog-full',
  imports: [NavbarComponent, ListCardsComponent],
  templateUrl: './catalog-full.component.html',
  styleUrl: './catalog-full.component.css'
})
export class CatalogFullComponent {

}
