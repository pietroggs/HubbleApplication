import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHomeOneComponent } from './page-home-one.component';

describe('PageHomeOneComponent', () => {
  let component: PageHomeOneComponent;
  let fixture: ComponentFixture<PageHomeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHomeOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHomeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
