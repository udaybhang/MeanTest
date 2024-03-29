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
import { RendertemplatesonconditionComponent } from './rendertemplates/rendertemplatesoncondition.component';
import { CardComponent } from './rendercard/card.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { TimerComponent } from './timer/timer.component';
import { SidebarComponent } from './layout/sidebar.component';
import { OutletRefComponent } from './template-outlet-ref/outlet-ref/outlet-ref.component';
import { ChildRefComponent } from './template-outlet-ref/child/child-ref/child-ref.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AddComponent,
    EditComponent,
    RendertemplatesonconditionComponent,
    CardComponent,
    ParentComponent,
    ChildComponent,
    AComponent,
    BComponent,
    TimerComponent,
    SidebarComponent,
    OutletRefComponent,
    ChildRefComponent
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
