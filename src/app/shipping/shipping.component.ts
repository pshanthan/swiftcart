import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-shipping',
  imports: [ReactiveFormsModule],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css',
})
export class ShippingComponent {
  shippingForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });
}
