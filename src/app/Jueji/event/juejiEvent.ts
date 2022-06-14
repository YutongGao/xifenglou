export class JuejiEvent {
  isDrink: boolean;
  isChat: boolean;
  isSex: boolean;
  eventText: string;

  constructor() {
    this.isDrink = false;
    this.isChat = false;
    this.isSex = false;
    this.eventText = '';
  }
}
