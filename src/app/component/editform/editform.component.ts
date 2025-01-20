import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router, RouterLink, RouterModule } from '@angular/router';
import { Student } from '../../model/student';
import { FormService } from '../../service/form.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightDirective } from '../../directive/highlight.directive';

@Component({
  selector: 'app-editform',
  imports: [RouterModule,RouterLink,CommonModule,FormsModule,ReactiveFormsModule,HttpClientModule,HighlightDirective],
  providers:[FormService],
  templateUrl: './editform.component.html',
  styleUrl: './editform.component.scss'
})
export class EditformComponent implements OnInit{
  editForm:FormGroup|any;
  public studentid!:number;
  public studentdata!:Student;
  formSubmitted:boolean = false;
  constructor(private formbuilder:FormBuilder, private api:FormService, private activateroute:ActivatedRoute, private route:Router){
    this.editForm = this.formbuilder.group({
      name: new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      mobileno:new FormControl('',[Validators.required,Validators.pattern("[0-9]{10}$"),Validators.minLength(10), Validators.maxLength(10)]),
      address:new FormControl('',[Validators.required])
      })
  }
  ngOnInit(): void {
    this.activateroute.params.subscribe((param:Params)=>{
      this.studentid = param['id'];
    })
    this.api.fetchdata(this.studentid).subscribe((student:Student)=>{
      this.studentdata =student;
      this.editForm.patchValue(this.studentdata);
      console.log(this.studentdata);

    })
  }
 updateRecord(): void{
  this.formSubmitted = true;
  if(this.editForm.valid){
  this.api.updatestudent(this.editForm.value,this.studentid).subscribe({next:(res:Student)=>{
    this.route.navigate(['/form']);
  },
  error: (err)=>{
    console.error("Updated failed", err);
  }
  })
 }
 else{
  console.log("Invalid form");
 }
}
}
