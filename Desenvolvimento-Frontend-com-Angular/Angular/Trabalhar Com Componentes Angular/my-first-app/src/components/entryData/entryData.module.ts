import { Component } from "@angular/core";

@Component({ 
    selector    : 'app-entry-data',
    templateUrl : './EntryData.component.html',
    styleUrls   : ['./EntryData.component.css'], 
})

export class EntryData{
    placeholde :String = "email";
    placepass : String = "senha";
}
