import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogCombustionComponent } from './catalog-combustion.component';

describe('CatalogCombustionComponent', () => {
  let component: CatalogCombustionComponent;
  let fixture: ComponentFixture<CatalogCombustionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogCombustionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogCombustionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
