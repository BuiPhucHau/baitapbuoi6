import { Component, EventEmitter, Output } from '@angular/core';
import { FriendshipService } from '../../services/friendship.service';
import { UserService } from '../../services/user.service';
import { Friendship } from 'src/models/friendship';

@Component({
  selector: 'app-chat-listfriend',
  templateUrl: './chat-listfriend.component.html',
  styleUrls: ['./chat-listfriend.component.scss']
})
export class ChatListfriendComponent {
  
  friendList: Array<Friendship> = [];

  @Output() selectedFriend: EventEmitter<Friendship> = new EventEmitter();

  constructor(
    public userService: UserService,
    public friendshipService: FriendshipService
  ) {
    this.userService.chatUser.subscribe((user) => {
      if (user == null) {
        return;
      }
      this.friendshipService.getFriendList(user?.email ?? '');
    });

    this.friendshipService.friendList.subscribe((friendship) => {
      if (friendship == null) {
        return;
      }
      if (
        !this.friendList
          .map((f) => f.friendEmail)
          .includes(friendship.friendEmail)
      ) {
        this.friendList.push(friendship);
      }
    });
  }

  chatWith(friendship: Friendship) {
    console.log(friendship);
    this.selectedFriend.emit(friendship);
  }
}