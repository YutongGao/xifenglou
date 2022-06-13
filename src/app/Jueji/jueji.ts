import {EventList} from "./event/eventList";
import {friendList} from "./data/friendList";

export class Jueji {
  name: string;
  friends: string[];
  friend: string;
  chat: string;
  availability: boolean;
  substitution: boolean;
  event: EventList;
  count: number;

  constructor() {
    this.name = '';
    this.friends = [];
    this.friend = '';
    this.chat = '';
    this.availability = true;
    this.substitution = true;
    this.event = new EventList();
    this.count = 0;
  }
}
