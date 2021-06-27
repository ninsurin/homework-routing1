import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillComponent } from './skill/skill.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { PortfoiloComponent } from './portfoilo/portfoilo.component';
const routes: Routes = [
  {
  path: '',
  component: HomeComponent
  },
  {
  path: 'home',
  component: HomeComponent
  },
  
  {
    path:'aboutme',
    component: AboutmeComponent
  },
  {
    path:'skill',
    component: SkillComponent
  },
  {
    path:'Contactme',
    component: ContactmeComponent

  },
  {
    path:'Portfoilo',
    component: PortfoiloComponent
  },
  
  {
  path: '**',
  component: PagenotfoundComponent
  }
 ];
 
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
