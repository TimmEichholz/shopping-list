import { Component, Input, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-add-to-list',
  templateUrl: './add-to-list.component.html',
  styleUrls: ['./add-to-list.component.scss']
})
export class AddToListComponent implements OnInit {
  myControl = new FormControl();
  
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;
  @Input() items:any;

  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
}
private _filter(value: string): string[] {
  const filterValue = value.toLowerCase();

  return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  newIngredient(ing:string, unit:string, amount:any){
  let newItem:string = amount+' '+ unit+": "+ ing
  
  
  
  
  }
}
