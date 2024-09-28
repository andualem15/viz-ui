import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PentavalentComponent } from './pentavalent.component';

describe('PentavalentComponent', () => {
  let component: PentavalentComponent;
  let fixture: ComponentFixture<PentavalentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PentavalentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PentavalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
