import { Component } from '@angular/core';
import {User} from '../../pages/users/User';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../user.service';
import {NgForOf, NgIf} from '@angular/common';
import {MatCard, MatCardContent, MatCardHeader, MatCardModule} from '@angular/material/card';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatButton,
    MatCardModule,
    MatIconButton,
    MatIcon
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  protected user: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ){}

  ngOnInit(): void{
    const userId: number = Number(this.route.snapshot.paramMap.get('id'));
    this.user = this.userService.getUsers().find(user => user.id === userId);
  }

  public goBack(): void{
    this.router.navigate(['/users']);
  }
}
