import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoItem} from "../interfaces/todo-item";

@Component({
  selector: 'app-todo-item',
  template: `    
    <div class="todo-item">
      <input type="checkbox"
             class="todo-checkbox"
             (click)="completeItem()"/>
      <span *ngIf="showTitle" class="todo-title" (click) = "showEdit()" [ngClass]="{'todo-complete': item.completed}">
        {{item.title}}
      </span>
      <span *ngIf="!showTitle"> <app-input-button-unit [item]="item" (submit)="updateItem($event)"></app-input-button-unit> </span>
      
      <button class="btn btn-red" (click)="removeItem()">
        remove
      </button>
    </div>
  `,
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();
  showTitle:boolean = true;

  constructor() {
  }

  ngOnInit() {
  }

  updateItem(event) {
    console.log('updateItem from to-do', event);
    this.showTitle = !this.showTitle;
    this.item.title = event;

  }

  removeItem() {
    this.remove.emit(this.item);
  }

  completeItem(event) {
    this.update.emit({
      item: this.item,
      changes: {completed: !this.item.completed}
    });
  }
  showEdit(){
    this.showTitle = !this.showTitle;
  }
}
