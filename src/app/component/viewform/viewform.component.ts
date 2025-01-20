import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { Student } from '../../model/student';
import { FormService } from '../../service/form.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-viewform',
  imports: [RouterLink,CommonModule,HttpClientModule],
  providers:[FormService],
  templateUrl: './viewform.component.html',
  styleUrl: './viewform.component.scss'
})
export class ViewformComponent implements OnInit{
  public studentid!:number;
  public studentdata!:Student;
  constructor(private api:FormService, private activateroute:ActivatedRoute){}
  ngOnInit(): void {
    this.activateroute.params.subscribe((param:Params)=>{
      this.studentid = param['id'];
    })
    this.api.fetchdata(this.studentid).subscribe((student:Student)=>{
        this.studentdata =student;
        console.log(this.studentdata);
      })
  }

}
