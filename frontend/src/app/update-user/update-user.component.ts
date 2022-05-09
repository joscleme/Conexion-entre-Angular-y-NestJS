import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GetUsersService } from '../get-users/get-users.service';
import { User } from '../get-users/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user: any = {};

  constructor(private getUsersSvc: GetUsersService, private route: Router, private activatedRoute: ActivatedRoute) { }

  updateForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    description: new FormControl(''),
    age: new FormControl('')
  })

  updateData(id: string, user: User) {

    user = this.updateForm.value;
    
    this.getUsersSvc.updateUserSelected(id, user).subscribe((updated_user) => {

      if (updated_user) {

        this.route.navigate(['/get_users']);

      }

    })
  
  }

  ngOnInit(): void {

    const params = this.activatedRoute.snapshot.params;

    this.getUsersSvc.getUser(params['id']).subscribe((user_selected) => {

      this.user = user_selected;

    })

  }

}
