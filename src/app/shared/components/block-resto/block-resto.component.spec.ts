import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockRestoComponent } from './block-resto.component';

describe('BlockRestoComponent', () => {
  let component: BlockRestoComponent;
  let fixture: ComponentFixture<BlockRestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockRestoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
