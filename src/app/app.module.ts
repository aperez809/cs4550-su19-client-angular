import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsitelistComponent } from './websitelist/websitelist.component';
import { PagelistComponent } from './pagelist/pagelist.component';
import { PageeditorComponent } from './pageeditor/pageeditor.component';
import { PagetoolbarComponent } from './pagetoolbar/pagetoolbar.component';
import { RowComponent } from './row/row.component';
import { RowtoolbarComponent } from './rowtoolbar/rowtoolbar.component';
import { ColumnComponent } from './column/column.component';
import { ColumntoolbarComponent } from './columntoolbar/columntoolbar.component';
import { WidgetComponent } from './widget/widget.component';
import { WidgettoolbarComponent } from './widgettoolbar/widgettoolbar.component';
import { WidgeteditorComponent } from './widgeteditor/widgeteditor.component';
import WebsiteService from "./services/WebsiteService";
import {UserService} from "./services/user.service.client";
import PageService from "./services/PageService";
import LayoutService from "./services/LayoutService";

@NgModule({
  declarations: [
    AppComponent,
    WebsitelistComponent,
    PagelistComponent,
    PageeditorComponent,
    PagetoolbarComponent,
    RowComponent,
    RowtoolbarComponent,
    ColumnComponent,
    ColumntoolbarComponent,
    WidgetComponent,
    WidgettoolbarComponent,
    WidgeteditorComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    WebsiteService,
    UserService,
    PageService,
    LayoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
