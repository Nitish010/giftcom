import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  choiceList = ['Boy','Girl','Couple']

  selectedChoice: string = ''
  name:string = ''

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToProduct() {

    this.name = this.name.trim();
    if(this.name == ''){
      alert('please enter a valid name')
      return;
    }

    if(this.selectedChoice == ''){
      alert('please select your type')
      return;
    }

    localStorage.setItem('genderCode', this.selectedChoice)

    this.router.navigateByUrl('/product')
  }

}
