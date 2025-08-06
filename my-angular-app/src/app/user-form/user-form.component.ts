import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
   user: User = { name: '', email: '', age: 0 };
  success: boolean = false;

  constructor(private userService: UserService) {}

  submitForm() {
    this.userService.addUser(this.user).subscribe({
      next: () => this.success = true,
      error: (err) => console.error('Error:', err)
    });
  }

}
