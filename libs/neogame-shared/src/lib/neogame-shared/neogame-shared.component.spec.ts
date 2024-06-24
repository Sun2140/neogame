import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NeogameSharedComponent } from './neogame-shared.component';

describe('NeogameSharedComponent', () => {
  let component: NeogameSharedComponent;
  let fixture: ComponentFixture<NeogameSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeogameSharedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NeogameSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
