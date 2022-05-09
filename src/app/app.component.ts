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

  stage1Name =true;
  stage2Select = false;
  stage21No =false;
  stage3Action = false;
  stage31Wine = false;
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
}
