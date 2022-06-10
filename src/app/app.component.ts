import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'egor-5-angular-project';

  public callForm:boolean = true ; 

  showForm() {
    this.callForm = !this.callForm ;
    console.log(this.callForm)
  }
}


