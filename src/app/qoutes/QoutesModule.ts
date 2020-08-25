import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { QoutesComponent } from '../qoutes/qoutes.component'
import { CapitalizePipe } from '../capitalize-pipe.pipe'



@NgModule({
  declarations: [
    AppComponent,
    QoutesComponent   
  ],
  imports: [
   CommonModule,
    AppRoutingModule,
    FormsModule,
    CapitalizePipe
  ],
  exports: [QoutesComponent]
 
})
export class QuotesModule { }
