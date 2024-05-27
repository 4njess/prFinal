import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileServerInfoComponent } from './mobile-server-info.component';

describe('MobileServerInfoComponent', () => {
  let component: MobileServerInfoComponent;
  let fixture: ComponentFixture<MobileServerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileServerInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileServerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
