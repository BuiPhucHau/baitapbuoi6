import { Component, Input } from '@angular/core';
import { ChatUser } from 'src/models/chat-user';
import { UserService } from '../../services/user.service';
import { FriendshipService } from '../../services/friendship.service';


@Component({
  selector: 'app-chat-user',
  templateUrl: './chat-user.component.html',
  styleUrls: ['./chat-user.component.scss']
})
export class ChatUserComponent {

  @Input() user : ChatUser | null = {
    id : 'id-001',  
    name: 'Cat',
    email:"cat@gmail.com",
    avatarUrl: 'https://hips.hearstapps.com/hmg-prod/images/dog-puns-1581708208.jpg'
  };

  constructor(public userService:UserService, public friendshipService:FriendshipService) {}

  async addFriend() {
    let yEmail = prompt('Enter your friend email');
    if (yEmail) {
      if (this.user == null) {
        return;
      }
      let result = await this.friendshipService.addFriendship(this.user.email, yEmail)
        if (result) {
          alert('Added friend success');
        } else {
            alert('Add friend failed');
      }
    }
  }

}
