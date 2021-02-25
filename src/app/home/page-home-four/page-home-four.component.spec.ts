import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHomeFourComponent } from './page-home-four.component';

describe('PageHomeFourComponent', () => {
  let component: PageHomeFourComponent;
  let fixture: ComponentFixture<PageHomeFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHomeFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHomeFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
