import { Component, Input, OnInit, ViewChild, NgZone } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import LifeCategory from '../LifeCategory';
import {take} from 'rxjs/operators';
import Note from '../Note';
import Task from '../Task';
import { NgbDatepickerModule, NgbModule, } from '@ng-bootstrap/ng-bootstrap';
import { CategoryStoreService } from '../category-store.service';
const { v4: uuidv4 } = require('uuid');
import {parse} from 'date-format-parse';
import { ColorPickerComponent } from '../color-picker/color-picker.component';
var tinycolor = require("tinycolor2");


@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {

  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  
  
  @Input() category: LifeCategory;


  dateStruct: NgbDateStruct;
  

  constructor(
    public categoryStore: CategoryStoreService,
    private _ngZone: NgZone
  ) { }

  ngOnInit(): void {
  }

  changeColor(categoryId: string, color: string) {
    this.categoryStore.editCategoryColor(categoryId, color);
  }

  darken(color: string, amount: number) : string {
    return tinycolor(color).darken(amount).toString();
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

  setDate(category: LifeCategory, task: Task , dateStr: string) {
    var d = new Date(dateStr);
    d.setMinutes( d.getTimezoneOffset() );
    this.categoryStore.updateTask(category.id, task.id, '', String(d))
  }

  newTask(): void {
    this.category.tasks.push({
      id: uuidv4(),
      isEvent: false,
      info: "",
      date: new Date()
    })
  }

}
