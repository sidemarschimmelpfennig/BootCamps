import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MenuComponent} from '../components/my-first-component/menu.component'
import {AppComponent } from './app.component';
import {Button} from '../components/button-component/button.component'
import { EntryData } from 'src/components/entryData/entryData.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    Button,
    EntryData,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
