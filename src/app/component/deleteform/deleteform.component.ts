import { Component, OnInit } from '@angular/core';
import { Student } from '../../model/student';
// import { FormService } from '../../service/form.service';
// import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
//import { MatDialogModule } from '@angular/material/dialog';
// import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-deleteform',
  imports: [CommonModule],
  templateUrl: './deleteform.component.html',
  styleUrl: './deleteform.component.scss'
})
export class DeleteformComponent implements OnInit{
  students: Student[] = [];
  public deletedata!:Student;
  public deleteid!:number;
  constructor(private activemodel:NgbActiveModal){}
  ngOnInit(): void {
    // this.activateroute.params.subscribe((param:Params)=>{
    //   this.deleteid = param['id'];
    // })
    // this.api.fetchdata(this.deleteid).subscribe((student:Student)=>{
    //   this.deletedata=student;
    //   console.log(this.deletedata);
    // })
  }
  confirm(){
    this.activemodel.close(true);

    // this.deletedata.students.then((result:any)=>{
    //   console.log(result);
    //   if(result){
    //     this.api.deletestudents(this.id).subscribe(res=>{
    //       //alert("Student Deleted Successfully");
    //       this.getStudents();
    //     })
    //   }
    // })

  }
  cancel(){
    this.activemodel.dismiss(false);
  }

}
