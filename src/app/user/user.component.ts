import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Routes } from '../routes';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private router: Router) { }

  users:any = [];
  userForm!: FormGroup;

  ngOnInit(): void {

    this.users = [
      { name: 'Janith', age: 25, email: 'j@email.com' },
      { name: 'Kasun', age: 23, email: 'k@email.com' },
      { name: 'Amal', age: 35, email: 'a@email.com' },
      { name: 'Dasun', age: 45, email: 'jd@email.com' },
      { name: 'Faf', age: 28, email: 'f@email.com' },
      { name: 'Manith', age: 15, email: 'm@email.com' },
    ];

    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }


  navigateToHome() {
    this.router.navigate([Routes.Home]);
  }

  submit(){
    console.log(this.userForm.value);
    this.users.push(this.userForm.value);
  }
}
