import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { CategoryStoreService } from '../category-store.service';
import LifeCategory from '../LifeCategory';
var tinycolor = require('tinycolor2');

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  darken(color: string, amount: number): string {
    return tinycolor(color).darken(amount).toString();
  }

  activeDayIsOpen: boolean = true;

  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();
  refresh: Subject<any> = new Subject();

  constructor(public categoryStore: CategoryStoreService) {}

  events: CalendarEvent[] = [];

  getEvents() {
    this.categoryStore.categories.forEach((category) => {
      if (category.tasks.length) {
        category.tasks.forEach((task) => {
          this.events.push({
            meta: category.id,
            id: task.id,
            title: task.info,
            color: {
              primary: category.color,
              secondary: category.color,
            },
            start: task.date,
            draggable: true,
          });
        });
      }
    });
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  removeEvent(event: CalendarEvent) {
    this.categoryStore.removeTask(event.meta, String(event.id));
    this.events.filter(element => {element.id !== event.id});
    this.refresh.next(null);
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.categoryStore.updateTask(
      event.meta,
      String(event.id),
      '',
      event.start.toDateString()
    );
    this.refresh.next(null);
  }

  ngOnInit(): void {
    this.getEvents();
  }
}
