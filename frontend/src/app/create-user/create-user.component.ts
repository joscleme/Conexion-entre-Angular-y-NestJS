import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateUserService } from './create-user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private createUserSvc: CreateUserService, private route: Router) { }

  createForm = new FormGroup({

    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required)
  
  })

  get nameControl(): FormControl {
    return this.createForm.get('name') as FormControl;
  }

  get surnameControl(): FormControl {
    return this.createForm.get('surname') as FormControl;
  }

  get descriptionControl(): FormControl {
    return this.createForm.get('description') as FormControl;
  }

  get ageControl(): FormControl {
    return this.createForm.get('age') as FormControl;
  }

  submitData() {
    
    this.createUserSvc.createUser(this.createForm.value).subscribe((result) => {

      if (result) {

        this.route.navigate(['/get_users']);

      }

    })
    
  }

  ngOnInit(): void {
  }

}
