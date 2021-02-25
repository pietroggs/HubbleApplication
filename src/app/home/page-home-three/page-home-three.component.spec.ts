import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHomeThreeComponent } from './page-home-three.component';

describe('PageHomeThreeComponent', () => {
  let component: PageHomeThreeComponent;
  let fixture: ComponentFixture<PageHomeThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHomeThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHomeThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
