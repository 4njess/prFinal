import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RttpServerInfoComponent } from './rttp-server-info.component';

describe('RttpServerInfoComponent', () => {
  let component: RttpServerInfoComponent;
  let fixture: ComponentFixture<RttpServerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RttpServerInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RttpServerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
