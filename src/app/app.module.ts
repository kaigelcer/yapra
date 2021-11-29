import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule, DateAdapter} from 'angular-calendar'
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { KtdGridModule } from '@katoid/angular-grid-layout';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {TextFieldModule} from '@angular/cdk/text-field'
import { NgxsModule } from '@ngxs/store';
import { NgbModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerComponent } from './color-picker/color-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CalendarComponent,
    AboutComponent,
    CategoryCardComponent,
    ColorPickerComponent,
  ],
  entryComponents: [ColorPickerComponent],
  imports: [
    BrowserAnimationsModule,
    MatExpansionModule,
    TextFieldModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    MatDialogModule,
    NgbDatepickerModule,
    NgbModule,
    MatGridListModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    KtdGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
