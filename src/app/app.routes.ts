import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CatalogFullComponent } from './pages/catalog-full/catalog-full.component';
import { CatalogElectricComponent } from './pages/catalog-electric/catalog-electric.component';
import { CatalogCombustionComponent } from './pages/catalog-combustion/catalog-combustion.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'catalogo-completo', component: CatalogFullComponent },
  { path: 'catalogo-electrico', component: CatalogElectricComponent },
  { path: 'catalogo-combustion', component: CatalogCombustionComponent },
  { path: '**', redirectTo: '' } // fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
