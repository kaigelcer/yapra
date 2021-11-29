import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryStoreService } from '../category-store.service';
import { ColorPickerComponent } from '../color-picker/color-picker.component';
import LifeCategory from '../LifeCategory';
import Task from '../Task';
const { v4: uuidv4 } = require('uuid');

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  categories: LifeCategory[] = [];
  test: string[] = ['fart', 'poop'];
  instructionsOpen: boolean = true;

  constructor(
    private changeDetection: ChangeDetectorRef,
    public categoryStore: CategoryStoreService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  
}
