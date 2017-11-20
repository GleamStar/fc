import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataService } from './services/data.service';
import { AppComponent } from './app.component';
import { GenericComponent } from './generic/generic.component';
import { NguiDatetimePickerModule } from '@ngui/datetime-picker';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes} from '@angular/router';
import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';
import { OnlyNumbersDirective } from './only-numbers.directive';

const appRoutes: Routes = [
  { path: '', redirectTo: '/add', pathMatch: 'full'},
  { path: 'add', component: AddComponent },
  { path: 'show', component: ShowComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    GenericComponent,
    NavbarComponent,
    AddComponent,
    ShowComponent,
    OnlyNumbersDirective
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    NguiDatetimePickerModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
