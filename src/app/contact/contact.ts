import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule,MatIconModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
 contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  });

  submit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      alert('Message sent!');
      this.contactForm.reset();
    } else {
      alert('Please fill all required fields.');
    }
  }
}
