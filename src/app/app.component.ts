import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template Syntax - Angular Guide';
  prefix = 'Mr';
  public heroName = 'Windstorm';
  isHidden = true;
  heroImageUrl = './favicon.ico';
  evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';
  actionName = "Click Me";
  public isSpecial = true;
  public canSave = true;
  onSaveClickEvent: string;
  public myEntryPhone;
  currentHeroBirthdate = "February 25, 1979";



  @Input()  size: number | string;
  @Output() sizeChange = new EventEmitter<number>();
 
  dec() { this.resize(-1); }
  inc() { this.resize(+1); }
 
  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }

  onSave(){
    this.onSaveClickEvent = "you click on save button";
  }

  delete(){
    console.log("you click delete!");
  }

  callPhone(phone){
    this.myEntryPhone = phone;
    console.log(phone);
  }

  callFax(fax){
    console.log(fax);
  }
}
