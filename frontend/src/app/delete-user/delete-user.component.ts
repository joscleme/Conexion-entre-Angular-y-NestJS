import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GetUsersService } from '../get-users/get-users.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  user: any = {};

  constructor(private getUsersSvc: GetUsersService, private route: Router, private activatedRoute: ActivatedRoute) { }

  deleteForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    description: new FormControl(''),
    age: new FormControl('')
  })

  deleteData(id: string) {
    
    this.getUsersSvc.deleteUserSelected(id).subscribe((deleted_user) => {

      if (deleted_user) {

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
