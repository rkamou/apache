import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsAndCategoriesComponent } from './items-and-categories.component';

describe('ItemsAndCategoriesComponent', () => {
  let component: ItemsAndCategoriesComponent;
  let fixture: ComponentFixture<ItemsAndCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsAndCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsAndCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
