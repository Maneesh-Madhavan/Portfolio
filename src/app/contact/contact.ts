import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, MatIconModule, MatTooltipModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
}
