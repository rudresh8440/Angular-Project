import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course=[
    {'id':1,'name':'Learn Angular','description': 'Angular commonly referred to as "Angular 2 is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS','image':'../../assets/angular.png'},
    {'id':2,'name':'Learn TypeScript','description': 'TypeScript is. JavaScript with syntax for types. TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.','image':'../../assets/type.png'},
    {'id':3,'name':'Learn Node.js','description': 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.','image':'../../assets/node.png'},
    {'id':4,'name':'Learn Javascript','description': 'JavaScript , often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS','image':'../../assets/javascript.jpg'}
  ]
}
