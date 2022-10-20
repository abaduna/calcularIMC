import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResulradoComponent } from './resulrado.component';

describe('ResulradoComponent', () => {
  let component: ResulradoComponent;
  let fixture: ComponentFixture<ResulradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResulradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResulradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
