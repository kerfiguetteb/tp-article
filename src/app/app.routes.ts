import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { TachesComponent } from './pages/taches/taches.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MessagerieComponent } from './pages/messagerie/messagerie.component';

export const routes: Routes = 
[

    {path:"", redirectTo:"home", pathMatch:'full'},

    // https://xxxxx.com/{uri}
    {path:'home', component:HomeComponent},
    {path:'articles', component:ArticlesComponent},
    {path:'taches', component:TachesComponent},
    {path:'contact', component:ContactComponent},
    {path:'mesageires', component:MessagerieComponent},

    {path:"**", component:NotFoundComponent}
];
