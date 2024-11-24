import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudioComponent } from './list-studio.component';

describe('ListStudioComponent', () => {
  let component: ListStudioComponent;
  let fixture: ComponentFixture<ListStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListStudioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
