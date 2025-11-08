import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogElectricComponent } from './catalog-electric.component';

describe('CatalogElectricComponent', () => {
  let component: CatalogElectricComponent;
  let fixture: ComponentFixture<CatalogElectricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogElectricComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogElectricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
