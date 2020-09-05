import { HomeComponent } from './pages/home/home.component';
import { INITIAL_STATES } from './states';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { AppComponent } from './app.component';
import { PeopleComponent } from './pages/people/people.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PeopleComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        UIRouterModule.forRoot({
            states: INITIAL_STATES,
            initial: { state: 'home' }
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
