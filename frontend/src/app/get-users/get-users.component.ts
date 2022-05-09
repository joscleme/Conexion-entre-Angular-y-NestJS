import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetUsersService } from './get-users.service';
import { User } from './user';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {

  displayedColumns: string[] = ['_id', 'name', 'surname', 'description', 'age', 'update', 'delete'];

  users: User[] = [];

  constructor(private getUsersSvc: GetUsersService, private route: Router) { }

  ngOnInit(): void {

    this.getUsersSvc.getUsers().subscribe((users_result) => {

      this.users = users_result;

      console.log(this.users);

    })

  }

}
