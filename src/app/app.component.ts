import {Component} from '@angular/core';
import {JuejiGenerator} from "./Jueji/juejiGenerator";
import {juejiList} from "./Jueji/data/juejiList";
import {visitorList} from "./Jueji/event/chat/visitorList";
import {baguaList} from "./Jueji/event/chat/baguaList";
import {topicList} from "./Jueji/event/chat/topicList";
import {EventList} from "./Jueji/event/eventList";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'xifeng';
  generator = new JuejiGenerator();
  juejiList = this.generator.initJueji();
  jueji= {
    name: '',
    availability: true,
    substitution: true,
    friends: ['default'],
    friend: '',
    event: new EventList(),
    count: 0,
    chat:''
  };
  username = "";
  action = '';

  visitor = '';
  bagua ='';
  topic = '';
  sexEvent = {
    key: '',
    value: 0
  };

  stage1Name =true;
  stage2Select = false;
  stage3Action = false;

  stage3Drink = false;
  actionDrink = true;

  stage3Chat = false;
  actionChat = true;

  stage3Sex = false;
  actionSex = true;

  stage4End = false;
  stage4EndTime = false;
  stage4EndGG = false;

  ngInit() {
  }

  getName(event: any) {
    if (event.key === 'Enter' || event.type === 'click') {
      //show box
      console.log(event);
      this.stage1Name = false;
      this.stage2Select = true;
    }
  }

  toNext(){
    this.stage2Select=false;
    this.stage3Action=true
  }

  act(jueji: any, action: string){
    if(jueji.count > 15){
      this.stage3Action=false
      this.stage4End = true;
      this.stage4EndTime = true;
    }
    jueji.count++;
    this.stage3Drink = false;
    this.stage3Chat = false;
    this.stage3Sex = false;
    switch (action){
      case 'DRINK':
        this.stage3Drink=true;
        this.actionDrink = Math.random() < 0.5;
        if(this.actionDrink){
          jueji.xingzhi *= 1.25;
        } else{
          jueji.xingzhi *= 0.75;
        }
        break;
      case 'CHAT':
        this.stage3Chat=true;
        this.actionChat = Math.random() < 0.75;
        if(this.actionChat){
          jueji.xingzhi *= 1.1;
          this.visitor = visitorList[Math.floor(Math.random()*visitorList.length)];
          this.bagua = baguaList[Math.floor(Math.random()*baguaList.length)];
          this.jueji.chat = this.jueji.event.chat[Math.floor(Math.random()*this.jueji.event.chat.length)];
        } else{
          jueji.xingzhi *= 0.75;
          this.topic = topicList[Math.floor(Math.random()*topicList.length)];
        }
        break;
      case 'SEX':
        this.stage3Sex=true;
        this.actionSex = Math.random() < 0.5;
        if(this.actionSex){
          this.sexEvent = this.jueji.event.sex[Math.floor(Math.random()*this.jueji.event.sex.length)];
          jueji.xingzhi *= (1 + this.sexEvent.value);
        } else{
          this.stage3Sex=false;
          this.stage4End = true;
          this.stage4EndGG = true;
        }
        break;
    }
  }
}
