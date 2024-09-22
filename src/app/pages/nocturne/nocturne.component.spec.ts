import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NocturneComponent } from './nocturne.component';

describe('NocturneComponent', () => {
  let component: NocturneComponent;
  let fixture: ComponentFixture<NocturneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NocturneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NocturneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
