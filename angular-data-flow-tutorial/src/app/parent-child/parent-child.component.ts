import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.scss']
})
export class ParentChildComponent implements OnInit {

  userLoggedIn: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    alert("Hello! I hope you're learning a lot!");
  }

}
