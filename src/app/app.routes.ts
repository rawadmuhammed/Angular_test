import { Routes } from '@angular/router';
import { HomeComponent} from '../pages/home/home.component';
import { AboutComponent } from '../pages/about/about.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { UsersComponent } from '../pages/users/users.component';
import { UserDetailsComponent } from '../components/user-details/user-details.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'users', component: UsersComponent},
  { path: 'users/:id', component: UserDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent}
];
