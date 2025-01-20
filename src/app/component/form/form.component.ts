import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Student } from '../../model/student';
import { FormService } from '../../service/form.service';
import { FilterPipe } from '../../pipe/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteformComponent } from '../deleteform/deleteform.component';
import { AuthService } from '../../service/auth.service';
import { signOut } from 'firebase/auth';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatButtonModule } from '@angular/material/button';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { DeleteformComponent } from '../deleteform/deleteform.component';

@Component({
  selector: 'app-form',
  imports: [RouterLink,CommonModule,FilterPipe,FormsModule,NgxPaginationModule,HttpClientModule],
  providers:[FormService],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit{
  students: Student[] = [];
  //public studentdata :Student;
   length:number=100;
   pageNumber:number=1;
   pageSize:number=10;
   searchText:any;
   name:any;
   email:any;
   mobile:any;
   address:any;
   constructor(private api:FormService, private modelService:NgbModal, private auth:AuthService){}
   ngOnInit(): void {
   this.getStudents();
   // console.log(this.getStudents());
   }
   getStudents(): void {
      this.api.getstudents().subscribe({next:(res)=> {
         this.students = res;
         console.log(res.length);
       },
       error: (err) =>{
         console.error('get the student', err);
       }
     });
   }
   deleterecord(id:number){
     //if(confirm('Are you sure to delete records'))
     const deletedata = this.modelService.open(DeleteformComponent);
     deletedata.result.then((result:any)=>{
       console.log(result);
       this.api.deletestudents(id).subscribe(res=>{
           //alert("Student Deleted Successfully");
           this.getStudents();
         })
     })
    }
    logout(){
      this.api.signout();
    }
  //   search(){
  //     if(this.searchText == ""){
  //       this.getStudents();
  //     }else{
  //       this.students = this.students.filter(res =>{
  //         return res.name?.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase());
  //       })
  //     }
  //   //   // else{
  //   //   //   console.log("invalid data");
  //   //   // }
  //  }

}
