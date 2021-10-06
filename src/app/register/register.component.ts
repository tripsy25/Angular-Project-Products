import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  forbiddenNameValidator,
  patternValidator,
} from '../shared/user-name.validator';

@Component({
  selector: 'pm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  registrationForm = this.fb.group({
    username: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        forbiddenNameValidator(/admin/),
      ],
    ],
    password: [
      null,
      Validators.compose([
        Validators.required,
        patternValidator(/\d/, { hasNumber: true }),
        patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        patternValidator(/[a-z]/, { hasSmallCase: true }),
        Validators.minLength(8),
      ]),
    ],
    address: this.fb.group({
      city: [''],
      state: [''],
      postalCode: [''],
    }),
  });

  // registrationForm = new FormGroup({
  //   username: new FormControl('Tripti'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address : new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });

  loadAPIData() {
    this.registrationForm.patchValue({
      username: 'BruceLee',
      password: 'xyz',
      confirmPassword: 'xyz',
    });
  }

  ngOnInit(): void {}
}
