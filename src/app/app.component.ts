import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string ='';
  isDisplayedDetails = false;
  log=[]; 

  onResetUsername(){
    this.username = '';
  }

  onToggleDetails(){
    this.isDisplayedDetails = !this.isDisplayedDetails; 
   // this.log.push(this.log.length + 1);
   this.log.push(new Date());
  } 
}