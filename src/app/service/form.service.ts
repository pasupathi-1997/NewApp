import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../model/student';
import { getAuth, signOut } from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http:HttpClient,private router:Router) { }

  //post method
  addstudent(student:Student){
    return this.http.post<Student>("http://localhost:3000/form/",student);
  }
  //get method
  getstudents(){
    return this.http.get<Student[]>("http://localhost:3000/form/");
  }
  //delete method
  deletestudents(id:number){
    return this.http.delete<Student>("http://localhost:3000/form/"+id)
  }
  //fetch data on edit
fetchdata(id:number){
  return this.http.get<Student>("http://localhost:3000/form/"+id)
}
//update data
updatestudent(student:Student,id:number){
  return this.http.put<Student>("http://localhost:3000/form/"+id,student)
}
signout(){
  const auth = getAuth();
  signOut(auth).then((res:any)=>{
    console.log(res);
    this.router.navigate(['/login']);
  })

}
}
