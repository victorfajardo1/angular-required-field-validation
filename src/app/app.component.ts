import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MatCardModule, MatTabsModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // INI VARIABLES
    title = 'angular-required-field-validation';
    cuentaForm: FormGroup;
    descripcion: string = '';
    randomString: string = Math.random().toString(36).substring(7);
  // FIN VARIABLES

  constructor(private fb: FormBuilder){
    this.cuentaForm = this.fb.group({
      Descripcion: ['Validado', Validators.required]
    });
  }

  ngOnInit(): void{
    console.log("app.component | ngOnInit()");
  }

  validar(): void{
    console.log("app.component | validar()");
    if (!this.cuentaForm.valid) {
      console.log("app.component | !this.cuentaForm.valid");

      // If the form is invalid, trigger validation messages
      this.cuentaForm.markAllAsTouched();
      return;
    }
    
    console.log("app.component | this.cuentaForm.valid");
  }
}