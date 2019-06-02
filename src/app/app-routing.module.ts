import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { MessagesComponent } from './messages/messages.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  { path:'', redirectTo: '/feed', pathMatch: 'full' },
  { path:'feed', component: FeedComponent },
  { path:'messages', component: MessagesComponent },
  { path:'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
