import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


                                //19
import {HttpClientModule} from '@angular/common/Http';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';


                                //6
import { routing, appRoutingProviders} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    CreateComponent,
    ContactComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
                                    //7
    routing,
                                    

                                    //19
    HttpClientModule,
    FormsModule
  ],
  providers: [
                                    //8
      appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
