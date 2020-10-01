import { Component, OnInit } from '@angular/core';
import * as io from "socket.io-client";
import { Router } from '@angular/router';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

const SOCKET_ENDPOINT = 'https://me-api.mangepongjs.me/';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  socket;
  message: string;
  nickname: string = "Unknown";
  showEmojiPicker = false;
  sets = [
    'native',
    'google',
    'twitter',
    'facebook',
    'emojione',
    'apple',
    'messenger'
  ]

  set = 'google';
  constructor(private router: Router) { }

  ngOnInit() {

      if (!localStorage.getItem("user")) {
          alert("You need to login first!");
          this.router.navigate(['/login']);
      }
      if (localStorage.getItem("user")) {
          var login = document.getElementById("login");
          var login2 = document.getElementById("login2");

          login.style.display = "None";
          login2.style.display = "None";
      } else {
          var logout = document.getElementById("logout");
          var logout2 = document.getElementById("logout2");

          logout.style.display = "None";
          logout2.style.display = "None";
      }
  }



  setupSocketConnection() {
      console.log("User connected");
      let date = new Date();
      let options = {
          hour: "2-digit", minute: "2-digit"
     };
      this.socket = io(SOCKET_ENDPOINT);
      this.socket.on('message-broadcast', (data: string, nick: string) => {
      if (data) {
          const element = document.createElement('li');
          element.className = "chatbox";
          element.style.alignItems = "right";
          element.innerHTML = data + "<p id='time2'>" + date.toLocaleTimeString("swe-sv", options) + "</p>" + "<p id='time2'>" + nick + "</p>";
          element.style.background = 'white';
          element.style.padding =  '15px 30px';
          element.style.float = 'right';
          element.style.margin = '10px';
          element.style.display = 'block';
          document.getElementById('message-list').appendChild(element);
          element.scrollIntoView(false);
      }
  });
 }

 setNickname() {
     this.setupSocketConnection();
     let date = new Date();
     let options = {
         hour: "2-digit", minute: "2-digit"
     };
     (document.getElementById('box') as HTMLButtonElement).style.display = "None";
     (document.getElementById('chat-mess') as HTMLButtonElement).style.display = "Block";
     this.message = this.nickname + " har gått med i chatten.";
     this.sendMessage()
 }

 sendMessage() {
     let date = new Date();
     let options = {
         hour: "2-digit", minute: "2-digit"
    };
     this.socket.emit('message', this.message, this.nickname);
     const element = document.createElement('li');
     element.className = "chatbox";
     element.innerHTML = this.message + "<p id='time'>" + date.toLocaleTimeString("swe-sv", options) + "</p>" + "<p id='time'>" + this.nickname + "</p>";
     element.style.background = '#38EE2F';
     element.style.padding =  '10px 15px';
     element.style.margin = '10px';
     element.style.float = 'left';
     element.style.display = 'block';
     document.getElementById('message-list').appendChild(element);
     this.message = '';
     element.scrollIntoView(false);
  }

  toggleEmojiPicker() {
    console.log(this.showEmojiPicker);
        this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event) {
    console.log(this.message)
    const { message } = this;
    console.log(message);
    console.log(`${event.emoji.native}`)
    const text = `${message}${event.emoji.native}`;

    this.message = text;
    this.showEmojiPicker = false;
  }

}
