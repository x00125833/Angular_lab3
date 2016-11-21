import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { MyNewDirectiveDirective } from './my-new-directive.directive';
import { MyNewPipePipe } from './my-new-pipe.pipe';
import { TodoAppComponent } from './todo-app/todo-app.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    MyNewDirectiveDirective,
    MyNewPipePipe,
    TodoAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
