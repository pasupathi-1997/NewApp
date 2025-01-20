import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import firebase from "firebase/app";
// import "firebase/auth";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  RegisterUser(email:string, password:string){
    const auth= getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    // const auth = firebase.auth();
    // auth.createUserWithEmailAndPassword(email, password)
    .then((res:any) =>{
      console.log(res);
      // const user = res.user;
      alert('Registration Successful');
      this.router.navigate(['/login']);
    })
    .catch((error:any)=>{
      console.log(error);
      this.router.navigate(['/register'])
    })
  }
  Login(email:string, password:string){
    const auth = getAuth();
    signInWithEmailAndPassword(auth,email,password)
    .then((res:any)=>{
      console.log(res);
      // localStorage.setItem('token','true');
      this.router.navigate(['/form']);
    })
    .catch((error:any)=>{
      console.log(error);
    })
  }
  logout(){
    const auth = getAuth();
    signOut(auth).then((res:any)=>{
      console.log(res);
      this.router.navigate(['/login']);
    })
  }

  Displaydata(){
    const auth = getAuth();
    onAuthStateChanged(auth, (user)=>{
      if(user){
        console.log(user);
        const uid = user.uid;
      }
    })
  }
}
