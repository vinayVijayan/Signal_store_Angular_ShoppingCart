import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ngconentex } from './ngconentex';

describe('Ngconentex', () => {
  let component: Ngconentex;
  let fixture: ComponentFixture<Ngconentex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngconentex],
    }).compileComponents();

    fixture = TestBed.createComponent(Ngconentex);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
