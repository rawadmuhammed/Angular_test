import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {User} from './User';
import {RouterLink} from '@angular/router';
import {UserService} from '../../user.service';
import {MatCard, MatCardContent, MatCardHeader, MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterLink, MatCard, MatCardHeader, MatCardContent, MatCardModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  protected users: User[] = [];

  constructor(private userService: UserService){}

  public ngOnInit(): void{
    this.users = this.userService.getUsers();
  }
}
