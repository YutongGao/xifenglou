import {EventList} from "./juejiDataList/eventList";
import {friendList} from "./juejiDataList/friendList";

export class Jueji {
  name: string;
  friends: string[];
  friend: string;
  availability: boolean;
  substitution: boolean;
  event: EventList;
  count: number;

  constructor() {
    this.name = '';
    this.friends = ['default'];
    this.friend = '';
    this.availability = true;
    this.substitution = false;
    this.event = new EventList();
    this.count = 0;
  }
}
