import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { User } from 'src/app/auth/models/user.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() user: User;
  @Input() isLoggedIn: boolean;
  @Input() isLoading: boolean;
  @Input() isAdmin: boolean;

  @Output() logout = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

  onLogout() {
    this.logout.emit(this.user);
  }

}
