import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
interface Person {
  name: string;
  age: number;
  email: string;
  [key: string]: any; // add index signature
}

@Component({
  selector: 'app-my-component',
  templateUrl: './food-component.component.html',
  styleUrls: ['./food-component.component.css']
})

export class FoodComponentComponent {
  constructor(){
    const storedData = localStorage.getItem('data');

    if (storedData) {
      this.tableData = JSON.parse(storedData);
    }
  }
  autosaveTimeout: any;
  tableData:Person[] = [
    { name: 'John', age: 25, email: 'john@example.com' },
    { name: 'Jane', age: 30, email: 'jane@example.com' },
    { name: 'Bob', age: 40, email: 'bob@example.com' }
  ];
  tableHeaders = ['Name', 'Age', 'Email','test1',"test2"];

  updateValue(value: any, key: string, index: number) {
    this.tableData[index][key] = (value.target as HTMLInputElement).value!;
       // Debounce the autosave process
    clearTimeout(this.autosaveTimeout);
    this.autosaveTimeout = setTimeout(() => this.autosaveData(), 2000);
  }
  autosaveData() {
    const value = JSON.stringify(this.tableData)
    localStorage.setItem("data",value)
  }

}
