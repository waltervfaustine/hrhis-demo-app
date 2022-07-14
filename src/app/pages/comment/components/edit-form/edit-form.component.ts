import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent implements OnInit, AfterViewInit {
  userResponse$!: Observable<User[]>;
  user!: User;

  constructor(
    private userService: UserService,
    private updateUserDialog: MatDialogRef<EditFormComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { user : User }
  ) {
    this.user = this.data?.user;
  }

  userEditForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
  });

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.user && this.userEditForm) {
      this.userEditForm.patchValue(this.user);
    }
  }

  onEditFormData() {
    if (this.userEditForm && this.userEditForm.value) {
      this.userResponse$ = this.userService.updateUser(this.user?.id, {
        ...this.userEditForm.value,
        id: this.user && this.user.id ? this.user.id : '',
      });
      this.userResponse$.subscribe((users: User[]) => {
        if (users && users.length) {
          this.updateUserDialog.close({
            userResponse: users,
          });
        }
      });
    }
  }
}
