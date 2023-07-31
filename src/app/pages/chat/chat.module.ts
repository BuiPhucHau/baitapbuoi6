import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './components/chat/chat.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { ChatControlComponent } from './components/chat-control/chat-control.component';
import { ChatUserComponent } from './components/chat-user/chat-user.component';
import { ChatListfriendComponent } from './components/chat-listfriend/chat-listfriend.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChatComponent,
    ChatBoxComponent,
    ChatControlComponent,
    ChatUserComponent,
    ChatListfriendComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule
  ]
})
export class ChatModule { }
