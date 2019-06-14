import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'shared-forms',
  templateUrl: './forms.component.html'
})
export class FormsComponent {

  constructor() {
  }

  private ngForm: NgForm;
}
