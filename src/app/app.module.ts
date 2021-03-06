import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AppComponent } from './app.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './product.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlashMessagesModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    MatPaginatorModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
