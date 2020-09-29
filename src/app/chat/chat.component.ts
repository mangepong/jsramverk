import { Component, OnInit } from '@angular/core';
import * as io from "socket.io-client";

const SOCKET_ENDPOINT = 'localhost:1337';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  socket;
  message: string;
  nickname: string = "Unknown";
  constructor() { }

  ngOnInit() {
      this.setupSocketConnection();
      if (localStorage.getItem("user")) {
          var login = document.getElementById("login");
          var login2 = document.getElementById("login2");

          var report = document.getElementById("reports");
          var report2 = document.getElementById("reports2");

          login.style.display = "None";
          login2.style.display = "None";
      } else {
          var login = document.getElementById("reports");
          var login2 = document.getElementById("reports2");
          var logout = document.getElementById("logout");
          var logout2 = document.getElementById("logout2");

          logout.style.display = "None";
          logout2.style.display = "None";
          login.style.display = "None";
          login2.style.display = "None";
      }
  }

  // setNickname() {
  //     document.getElementById("nickname").value = "";
  // }

  setupSocketConnection() {
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
          document.getElementById('message-list').appendChild(element);
      }
  });
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
     element.style.background = 'white';
     element.style.padding =  '10px 15px';
     element.style.margin = '10px';
     element.style.float = 'left';

     document.getElementById('message-list').appendChild(element);
     this.message = '';
  }
}
