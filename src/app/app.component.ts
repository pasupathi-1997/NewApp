import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// import firebase from 'firebase/app'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  // providers:[HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
   const firebaseConfig = {
    apiKey: 'AIzaSyBMUKYRcAhIEDVvlSV3egGn-vm0L9XhTrs'
  // apiKey: "AIzaSyB0S3xv_vbrKLVLfuWq7t4AF-A1GeGeb0c",
  // authDomain: "student-form-b59a7.firebaseapp.com",
  // projectId: "student-form-b59a7",
  // storageBucket: "student-form-b59a7.firebasestorage.app",
  // messagingSenderId: "4006920307",
  // appId: "1:4006920307:web:05c0bded20bca32672aa06",
  // measurementId: "G-MM6W4R9R5L"
   };

  //  firebase.initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  }


}
