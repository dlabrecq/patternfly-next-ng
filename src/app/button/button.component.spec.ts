import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from './button.component';
import { ButtonStyle } from './button-type';

describe('Button component - ', () => {
  let comp: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(() => {
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule
      ],
      declarations: [
        ButtonComponent
      ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ButtonComponent);
        comp = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should have a default type', () => {
    let button = fixture.debugElement.query(By.css('.pf-c-button'));
    expect(button).not.toBeNull();
  });

  it('should have type danger', () => {
    comp.style = ButtonStyle.DANGER;
    fixture.detectChanges();

    let button = fixture.debugElement.query(By.css('.pf-c-button.pf-m-danger'));
    expect(button).not.toBeNull();
  });

  it('should have type primary', () => {
    comp.style = ButtonStyle.PRIMARY;
    fixture.detectChanges();

    let button = fixture.debugElement.query(By.css('.pf-c-button.pf-m-primary'));
    expect(button).not.toBeNull();
  });

  it('should have type secondary', () => {
    comp.style = ButtonStyle.SECONDARY;
    fixture.detectChanges();

    let button = fixture.debugElement.query(By.css('.pf-c-button.pf-m-secondary'));
    expect(button).not.toBeNull();
  });

  it('should have type tertiary', () => {
    comp.style = ButtonStyle.TERTIARY;
    fixture.detectChanges();

    let button = fixture.debugElement.query(By.css('.pf-c-button.pf-m-tertiary'));
    expect(button).not.toBeNull();
  });

  it('should have type link', () => {
    comp.style = ButtonStyle.LINK;
    fixture.detectChanges();

    let button = fixture.debugElement.query(By.css('.pf-c-button.pf-m-link'));
    expect(button).not.toBeNull();
  });

  it('should have type action', () => {
    comp.style = ButtonStyle.ACTION;
    fixture.detectChanges();

    let button = fixture.debugElement.query(By.css('.pf-c-button.pf-m-action'));
    expect(button).not.toBeNull();
  });

  it('should call a function when button is clicked', () => {
    let event: any = null;
    comp.onClick.subscribe(($event: ButtonComponent) => {
      event = $event;
    });
    let button = fixture.debugElement.query(By.css('.pf-c-button'));
    expect(button).not.toBeNull();

    button.nativeElement.click();
    fixture.detectChanges();
    expect(event).not.toBeNull();
  });
});
