import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqResponseComponent } from './faq-response.component';

describe('FaqResponseComponent', () => {
  let component: FaqResponseComponent;
  let fixture: ComponentFixture<FaqResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqResponseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
