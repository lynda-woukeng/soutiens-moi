import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqPostComponent } from './faq-post.component';

describe('FaqPostComponent', () => {
  let component: FaqPostComponent;
  let fixture: ComponentFixture<FaqPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
