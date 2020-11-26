import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usedirectives',
  templateUrl: './usedirectives.component.html',
  styleUrls: ['./usedirectives.component.css']
})
export class UsedirectivesComponent implements OnInit {

  showPara: boolean = true;
  displayButtonClickHistory: Date[] = [];

  userdirectives: string = "usedirectives works!";
  constructor() {
    setTimeout(()=> {
      this.userdirectives = "usedirectives works! updated"
    }, 2000);
   }

  ngOnInit(): void {
  }

  togglePara(event: Event) {
    this.showPara = this.showPara ? false : true;
    this.displayButtonClickHistory.push(new Date());
    
    console.log(this.displayButtonClickHistory.length);
  }

}
