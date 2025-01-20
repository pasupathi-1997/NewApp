import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
  registerForm:FormGroup|any;
  formSubmitted:boolean=false;
  constructor(private formbuilder:FormBuilder, private auth:AuthService){}
  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      username:new FormControl(''),
      email:new FormControl(''),
      password:new FormControl('')
    })
  }
  onSubmit(){
    console.log(this.registerForm.value);
    const email = this.registerForm.get('email').value;
    const password = this.registerForm.get('password').value;
    this.auth.RegisterUser(email, password);
  }
}
