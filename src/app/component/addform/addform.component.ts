import { CommonModule } from '@angular/common';
import { Component, Directive, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FormService } from '../../service/form.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightDirective } from '../../directive/highlight.directive';

@Component({
  selector: 'app-addform',
  imports: [RouterLink,CommonModule,FormsModule,ReactiveFormsModule,HttpClientModule,HighlightDirective],
  providers:[FormService],
  templateUrl: './addform.component.html',
  styleUrl: './addform.component.scss'
})
export class AddformComponent implements OnInit{
  studentForm:FormGroup|any;
  // students: Student[] = [];
  formSubmitted:boolean = false;
  constructor(private formbuilder:FormBuilder, private router:Router, private api:FormService){

  }
  ngOnInit(): void {
 this.studentForm=this.formbuilder.group({
 name: new FormControl('',[Validators.required]),
 email:new FormControl('',[Validators.required,Validators.email]),
 mobileno:new FormControl('',[Validators.required,Validators.pattern("[0-9]{10}$"),Validators.minLength(10), Validators.maxLength(10)]),
 address:new FormControl('',[Validators.required])
 })
}
  onSubmit(): void{
    this.formSubmitted = true;
    if(this.studentForm.valid){
      const add =  this.studentForm.value;
      this.api.addstudent(add).subscribe((res:any)=>{
        this.studentForm.reset();
        this.router.navigate(["/form"]);
      })
    }
  else{
    console.log("Form is invalid");
  }
  }

}
