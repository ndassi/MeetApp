import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './Components/member-list/member-list.component';
import { MemberDetailComponent } from './Components/member-detail/member-detail.component';
import { ListsComponent } from './Components/lists/lists.component';
import { MessagesComponent } from './Components/messages/messages.component';
import { ErrorsComponent } from './Components/errors/errors.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"members", component: MemberListComponent},
    {path:"members/:id", component: MemberDetailComponent},
    {path:"lists", component: ListsComponent},
    {path:"messages", component: MessagesComponent},
    {path:"errors", component: ErrorsComponent},
    {path:"**", component: HomeComponent, pathMatch:"full"},
];
