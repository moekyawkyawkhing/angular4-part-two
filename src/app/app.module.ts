import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AddPipe } from './AddPipe';
import { SortPipe } from './SortPipe';
import { AppComponent } from './app.component';
import { EventTestComponent } from './event-test/event-test.component';

@NgModule({
  declarations: [
    AddPipe, // when you use all component, you notice AddPipe is up on other components
    SortPipe,
    AppComponent,
    EventTestComponent,
    EventTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
