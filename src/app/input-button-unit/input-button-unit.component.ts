import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input #inputElementRef class="todo-input" 
           [value]="item.title"
           (keyup.enter)="submitValue($event.target.value)">
    ​
    <button class="btn" (click)="submitValue(inputElementRef.value)">
      Save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

  @Input() item = {title:'empty'};
  @Output() submit: EventEmitter<string> = new EventEmitter();

  title = 'Hello World';
​
  constructor() { }
​
  ngOnInit() {
  }
​
  submitValue(newTitle: string) {
  console.log('submitValue', newTitle);
    this.submit.emit(newTitle);
  }
}
