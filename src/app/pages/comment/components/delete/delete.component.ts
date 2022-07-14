import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  userResponse$!: Observable<User[]>;
  user!: User;

  constructor(
    private userService: UserService,
    private deleteUserDialog: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { user : User }
  ) {
    this.user = this.data?.user;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  onDeleteUserData() {
    if (this.user) {
      this.userResponse$ = this.userService.deleteUser(this.user.id);
      this.userResponse$.subscribe((users: User[]) => {
        if (users && users.length) {
          this.deleteUserDialog.close({
            userResponse: users,
          });
        }
      });
    }
  }
}
