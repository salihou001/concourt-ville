import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivertissementsComponent } from './divertissements.component';

describe('DivertissementsComponent', () => {
  let component: DivertissementsComponent;
  let fixture: ComponentFixture<DivertissementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivertissementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivertissementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
