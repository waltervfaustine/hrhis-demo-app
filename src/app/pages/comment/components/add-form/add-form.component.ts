import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { random } from 'lodash';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent implements OnInit {
  userResponse$!: Observable<User[]>;

  constructor(
    private userService: UserService,
    private createUserDialog: MatDialogRef<AddFormComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  userAddForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
  });

  ngOnInit(): void {}

  onSaveFormData() {
    if (this.userAddForm && this.userAddForm.value) {
      this.userResponse$ = this.userService.createUser({
        ...this.userAddForm.value,
        id: new Date().getMilliseconds(),
      });
      this.userResponse$.subscribe((users: User[]) => {
        if (users && users.length) {
          this.createUserDialog.close({
            userResponse: users,
          });
        }
      });
    }
  }
}
