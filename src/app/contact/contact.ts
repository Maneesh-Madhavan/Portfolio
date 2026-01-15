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
}
