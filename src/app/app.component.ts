import {Component} from '@angular/core';
import {JuejiGenerator} from "./Jueji/juejiGenerator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  generator = new JuejiGenerator();
  juejiMap = this.generator.initJueji();
  jueji= this.juejiMap[0];
  friend = '';
  username = "";
  action = '';

  ngInit() {
  }

  getName(event: any) {
    if (event.key === 'Enter' || event.type === 'click') {
      //show box
      console.log(event);
    }
  }
}
