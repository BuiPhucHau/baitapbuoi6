import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { user } from '@angular/fire/auth';
import { Friendship } from 'src/models/friendship';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  friendship: Friendship | null = null;

  constructor(public userService:UserService, public router:Router) {
    this.userService.chatUser.subscribe((user) => {
      if (user == null ){
      this.router.navigate(['/login']);
      }
    });
  }
  selectedFriend($event: Friendship) {
    this.friendship = $event;
  }
}
