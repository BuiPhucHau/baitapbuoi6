import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatListfriendComponent } from './chat-listfriend.component';

describe('ChatListfriendComponent', () => {
  let component: ChatListfriendComponent;
  let fixture: ComponentFixture<ChatListfriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatListfriendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatListfriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
