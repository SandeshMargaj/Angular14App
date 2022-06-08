import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userForm: FormGroup = this.fb.group({
    firstName: ['',[Validators.required]],
    lastName: ['',[Validators.required]],
    userName: ['',[Validators.required, Validators.minLength(4)]],
    email: ['',[Validators.required, Validators.email]],
    phone: this.fb.control<string|null>(''),
    address:this.fb.group({
      AddressLine1:['', Validators.required],
      AddressLine2: this.fb.control<string|null>(''),
      City:['', Validators.required],
      Country:['', Validators.required],
    })
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
   console.log(this.userForm);
   console.log(this.userForm.value.address.AddressLine1);

  }
}
