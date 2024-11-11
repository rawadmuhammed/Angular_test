import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountingButtonComponent } from './counting-button.component';

describe('CountingButtonComponent', () => {
  let component: CountingButtonComponent;
  let fixture: ComponentFixture<CountingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountingButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
