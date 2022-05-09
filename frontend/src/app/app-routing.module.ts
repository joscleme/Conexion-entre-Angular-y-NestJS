import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { GetUsersComponent } from './get-users/get-users.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  { path: '', component: GetUsersComponent},
  { path: 'get_users', component: GetUsersComponent},
  { path: 'create_user', component: CreateUserComponent},
  { path: 'update_user/:id', component: UpdateUserComponent},
  { path: 'delete_user/:id', component: DeleteUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
