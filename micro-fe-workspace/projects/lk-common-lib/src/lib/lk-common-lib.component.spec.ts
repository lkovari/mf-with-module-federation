import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LkCommonLibComponent } from './lk-common-lib.component';

describe('LkCommonLibComponent', () => {
  let component: LkCommonLibComponent;
  let fixture: ComponentFixture<LkCommonLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LkCommonLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LkCommonLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
