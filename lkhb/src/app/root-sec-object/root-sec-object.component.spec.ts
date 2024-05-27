import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootSecObjectComponent } from './root-sec-object.component';

describe('RootSecObjectComponent', () => {
  let component: RootSecObjectComponent;
  let fixture: ComponentFixture<RootSecObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RootSecObjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RootSecObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
