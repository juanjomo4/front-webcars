import { Component } from '@angular/core';
import { ListCardsComponent } from "../../components/list-cards/list-cards.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-catalog-combustion',
  imports: [ListCardsComponent, NavbarComponent],
  templateUrl: './catalog-combustion.component.html',
  styleUrl: './catalog-combustion.component.css'
})
export class CatalogCombustionComponent {

}
