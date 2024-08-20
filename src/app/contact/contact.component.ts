import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  onClick(): void {
    // Log "Hello" to the console when the button is clicked
    console.log('Hello');
  }
}
