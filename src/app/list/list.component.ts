import { Component, OnChanges, OnInit } from '@angular/core';
import { Items } from 'src/models/items';
//add-to-list
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  public items!: Items;

  //add-to-list

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;


  constructor() { }

  ngOnInit(): void {
    this.newList()

    //add-to-list

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  ngOnChanges() {

  }

  newList() {
    this.items = new Items();
  }

    //add-to-list

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  newIngredient(ing: string, unit: string, amount: any) {
    let newItem: string = amount + ' ' + unit + ": " + ing
    
    this.items.listItems.push(newItem)
    console.log(this.items.listItems);
  }
}