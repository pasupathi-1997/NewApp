import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteformComponent } from './deleteform.component';

describe('DeleteformComponent', () => {
  let component: DeleteformComponent;
  let fixture: ComponentFixture<DeleteformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
