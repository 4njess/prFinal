import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDeviceCapabilitiesComponent } from './mobile-device-capabilities.component';

describe('MobileDeviceCapabilitiesComponent', () => {
  let component: MobileDeviceCapabilitiesComponent;
  let fixture: ComponentFixture<MobileDeviceCapabilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileDeviceCapabilitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileDeviceCapabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
