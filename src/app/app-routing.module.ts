import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'users',
    title: 'User Details',
    loadChildren: () =>
      import('./user-routing.module').then((mod) => mod.USER_ROUTES),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
