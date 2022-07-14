import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  users$!: Observable<User[]>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }

}
