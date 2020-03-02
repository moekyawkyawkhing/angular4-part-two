import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public items : string [] = ['php', 'javascipt', 'css'];
  public new_item : string;
  public name : string = 'moekyawkyawkhing';
  public day : object = new Date();
  public nums : number [] = [1 , 2, 4 ,5 , 6];
  public fruit : any [] = ['apple', 'orange', 'banana', 'mango'];
  public form;

  ngOnInit(){
    this.form= new FormGroup({
      uname : new FormControl('', Validators.compose([ // multiple validation
        Validators.required,
        Validators.minLength(5)
      ])),
      upass : new FormControl('', Validators.required),
      ucountry : new FormControl('')
    });
  }

  addNewItem(){
    this.items.push(this.new_item);
    this.new_item='';
  }

  removeItem(index){
    this.items.splice(index, 1);
  }

  saveUserData(data){
    console.log(data);
  }
}
