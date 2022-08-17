import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinfastComponent } from './joinfast.component';

describe('JoinfastComponent', () => {
  let component: JoinfastComponent;
  let fixture: ComponentFixture<JoinfastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinfastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinfastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
