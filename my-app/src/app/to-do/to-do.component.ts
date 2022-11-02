import { Component, OnInit } from '@angular/core';
import { takeLast } from 'rxjs';
import { ToDo } from '../classes/to-do';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
})
export class ToDoComponent implements OnInit {
  toDoArr: ToDo[] = [
    {
      id: 1,
      content: 'Pulire casa',
    },
    {
      id: 2,
      content: 'Fare la spesa',
    },
    {
      id: 3,
      content: 'Portare a spasso il cane',
    },
    {
      id: 4,
      content: 'Chiamare idraulico',
    },
    {
      id: 5,
      content: 'Rompere i maroni alla direzione',
    },
    {
      id: 6,
      content: 'Buttare la spazzatura',
    },
  ];

  done: boolean = false;
  currentStyles: Record<string, string> = {};

  constructor() {}

  ngOnInit(): void {}

  removeTask(obj: ToDo): void {
    let i = this.toDoArr.indexOf(obj);
    this.toDoArr.splice(i, 1);
  }

  setCurrentStyle() {
    this.currentStyles = {
      'text-decoration': this.done ? 'line-through' : 'none',
    };
  }
  setDone(obj: ToDo) {
    this.done = !this.done;
    this.setCurrentStyle();
  }
}
