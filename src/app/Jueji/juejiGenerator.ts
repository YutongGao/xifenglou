import {juejiList} from "./data/juejiList";
import {Jueji} from "./jueji";
import {friendList} from "./data/friendList";
import {EventList} from "./event/eventList";
import {chatList} from "./event/chat/chatList";
import {sexList} from "./event/sexList";

export class JuejiGenerator{

  initJueji(){
    let juejiObjectList = [];
    for(let name of juejiList){
      let jueji = new Jueji();
      jueji.name = name;
      jueji.availability = Math.random() < 0.5;
      jueji.substitution = Math.random() < 0.3;
      jueji.friends = (friendList as any)[name];
      jueji.friend = jueji.friends[Math.floor(Math.random() * jueji.friends.length)];
      jueji.event = new EventList();
      jueji.event.chat = (chatList as any)[name];
      jueji.event.sex = (sexList as any)[name];
      juejiObjectList.push(jueji);
    }
    return juejiObjectList;

  }
}
