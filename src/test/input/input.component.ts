/**
 * Provides the input and the label after receiving the value from
 * the form-builder
 */
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { TuiInputModule } from '@taiga-ui/kit';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less'],
  standalone: true,
  imports: [TuiInputModule, ReactiveFormsModule],
})
export class InputComponent implements OnInit {
  readonly testForm = new FormGroup({
    testValue: new FormControl('email@email.com'),
  });

  constructor() {}

  ngOnInit(): void {}
}
