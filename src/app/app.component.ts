import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public items : string [] = ['php', 'javascipt', 'css'];
  public new_item : string;
  public name : string = 'moekyawkyawkhing';
  public day : object = new Date();
  public nums : number [] = [1 , 2, 4 ,5 , 6];
  public fruit : any [] = ['apple', 'orange', 'banana', 'mango'];

  addNewItem(){
    this.items.push(this.new_item);
    this.new_item='';
  }

  removeItem(index){
    this.items.splice(index, 1);
  }
}
