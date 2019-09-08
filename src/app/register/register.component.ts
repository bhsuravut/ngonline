import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // // retrive from server
  // user = {
  //    provinceId: 2,
  //    fullname: 'Suravut',
  //   email: 'suravut@gmail.com'
  // }

  // Fix demo data from server
  users = {
    province: [
      {id: 1, name: 'Bangkok'},
      {id: 2, name: 'Patumtani'},
      {id: 3, name: 'Ayuttaya'},
      {id: 4, name: 'Lopburi'}
    ]
  };

  // https://codingthailand.com/api/get_user5.php


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  register(formValues: any) {
    // console.log(formValues);
    this.authService.register(formValues).subscribe(
      (feedback) => {
        if (feedback.status === 'ok') {
          alert(feedback.message);
          this.router.navigate(['/']);
        } else {
          alert(feedback.message);
        }
      }
    );
  }

}
