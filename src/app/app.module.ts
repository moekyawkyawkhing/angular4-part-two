import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AddPipe } from './AddPipe';
import { SortPipe } from './SortPipe';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AddPipe, // when you use all component, you notice AddPipe is up on other components
    SortPipe,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
