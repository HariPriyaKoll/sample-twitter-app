import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/skipWhile';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/throttleTime';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  message: string;
  messages: string[] = [];
  secretCode: string;

  constructor(private chatService: ChatService) {
    this.secretCode = 'DONT TELL';
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {
    this.chatService
      .getMessages()
      .subscribe((message: string) => {
      
        this.messages.push(message);
        console.log("this.messages............",this.messages)
      });
  }
 

}
