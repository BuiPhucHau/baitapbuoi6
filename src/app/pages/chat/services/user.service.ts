import { Injectable } from '@angular/core';
import { Auth, onAuthStateChanged, signOut} from '@angular/fire/auth';
import {BehaviorSubject} from 'rxjs';
import { ChatUser } from 'src/models/chat-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  chatUser: BehaviorSubject<ChatUser|null>;



  constructor(private auth: Auth) {

    this.chatUser = new BehaviorSubject<ChatUser|null>({
      id: 'id-001',
      name: 'Cat',
      email: 'cat@gmail.com',
      avatarUrl : 'https://hips.hearstapps.com/hmg-prod/images/dog-puns-1581708208.jpg',
    } as ChatUser);

    onAuthStateChanged(
      this.auth,
       (user) => {
      console.log(user);
      if (user) {
        this.chatUser.next({ 
          id: user.uid,
          name: user.displayName,
          email: user.email,
          avatarUrl: user.photoURL
        }as ChatUser );        
      } else {
        this.chatUser.next(null);
      }
    },(error)=>{
      console.log(error);
    })
   }
   async logout() {
      await signOut(this.auth);
   }

}
