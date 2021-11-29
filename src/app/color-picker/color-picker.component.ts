import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { truncate } from 'fs';
import { categoryColors, randomColor } from '../CategoryColors';


@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  public show = false;

  
  public defaultColors: string[] = categoryColors;
  
  @Input() heading: string;
  @Input() color: string;
  @Output() newColorEvent = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {
  }

  public toggleColors() {
    this.show = !this.show;
  }

  public changeColor(color: string) {
    this.color = color;
    this.newColorEvent.emit(this.color); // Return color
    this.show = false;
  }

}
