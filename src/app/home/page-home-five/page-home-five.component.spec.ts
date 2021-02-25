import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHomeFiveComponent } from './page-home-five.component';

describe('PageHomeFiveComponent', () => {
  let component: PageHomeFiveComponent;
  let fixture: ComponentFixture<PageHomeFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHomeFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHomeFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
