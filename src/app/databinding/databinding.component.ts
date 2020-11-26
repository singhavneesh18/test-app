import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  username: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  resetUsername()  {
    this.username ="";
  }

  checkUsernameSizeToDiableResetButton(): boolean {
    return this.username.length > 0  ? false: true;
  }

  seeEvents(event: Event) {
    console.log(event);
  }

}
