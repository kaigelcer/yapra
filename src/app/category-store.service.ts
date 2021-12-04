import { Injectable } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import {categoryColors, randomColor} from './CategoryColors';
import LifeCategory from './LifeCategory';
const { v4: uuidv4 } = require('uuid');

@Injectable({
  providedIn: 'root',
})
export class CategoryStoreService {

  

  private readonly _categories = new BehaviorSubject<LifeCategory[]>([]);

  readonly categories$ = this._categories.asObservable();

  get categories(): LifeCategory[] {
    return this._categories.getValue();
  }

  private set categories(val: LifeCategory[]) {
    this._categories.next(val);
  }

  newCategory() {
    this.categories = [...this.categories, { id: uuidv4(), color: randomColor(), name: 'New Category', tasks: [], notes: '' }];
  }

  removeCategory(id: string) {
    this.categories = this.categories.filter((category) => category.id !== id);
  }

  editCategoryName(categoryId: string, name: string){
    this.categories.forEach((category) => {
      if (category.id == categoryId) {
        category.name = name;
      }
    })
  }

  editCategoryColor(categoryId: string, color: string){
    this.categories.forEach((category) => {
      if (category.id == categoryId) {
        category.color = color;
      }
    })
  }

  addTask(categoryId: string) {
    this.categories.forEach((category) => {
      if (category.id == categoryId) {
        category.tasks.push({
          id: uuidv4(),
          isEvent: false,
          info: '',
          date: new Date(),
        });
      }
    });
  }

  removeTask(categoryId: string, taskId: any) {
    this.categories.forEach((category) => {
      if (category.id == categoryId) {
         category.tasks = category.tasks.filter((task) => task.id !== taskId);
      }
    });
  }

  updateTask(categoryId: string, taskId: string, info: string, date: string) {
    this.categories.forEach((category) => {
      if (category.id == categoryId) {
        category.tasks.forEach((task) => {
          if (task.id == taskId) {
            if (info) {
              task.info = info;
            }
            if (date) {
              task.date = new Date(date);
            }
          }
        });
      }
    });
  }

  updateNotes(categoryId: string, notes: string) {
    this.categories.forEach((category) => {
      if (category.id == categoryId) {
        category.notes = notes;
      }
    });
  }

  constructor() {}
}
