import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EndSliderPage } from './end-slider.page';

describe('EndSliderPage', () => {
  let component: EndSliderPage;
  let fixture: ComponentFixture<EndSliderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EndSliderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
