import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { DataService } from './services/data.service';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'user', component: UserComponent },
	{ path: 'about', component: AboutComponent }
];

@NgModule({
	declarations: [ AppComponent, UserComponent, AboutComponent, HomeComponent ],
	imports: [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes) ],
	providers: [ DataService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
