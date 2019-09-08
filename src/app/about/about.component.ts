import { Component, OnInit } from '@angular/core';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title: string;
  age: number;
  info = {email: 'suravut@gmail.com'};
  logo = './assets/nendoroid.PNG';
  imgWidth = 200;
  isShow = true;
  myColor = 'Yellow';
  isCssActive = false;

  users = ['John', 'Mary', 'Bob'];
  courses = [
    {name: 'PHP', price: 200},
    {name: 'Angular', price: 300},
    {name: 'React', price: 400},
  ];

  constructor(private titleBar: Title) {
    this.title = 'About US';
    this.age = 29;
   }

  ngOnInit() {
    this.titleBar.setTitle('= About =');

  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    // alert('About US Bye!');
  }

  go() {
    // alert('Hello world!');
    this.title = 'เกี่ยวกับเรา';
    // this.logo = './assets/azure_face_sdk.JPG';
    this.imgWidth = 500;
    this.isShow = !this.isShow;
    this.myColor = 'red';
    this.isCssActive = !this.isCssActive;
  }

}
