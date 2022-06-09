import { Route } from "@angular/router";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserComponent } from "./user/user.component";

export const USER_ROUTES: Route[] = [
  { path: '', component: UserComponent },
  { path: 'user-add', title: 'Add User', component: UserEditComponent },
  // ...
];
