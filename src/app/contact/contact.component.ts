import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  onClick(form: NgForm): void {
    if (form.valid) {
      // Log the form data to the console
      console.log('Form Data:', form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
