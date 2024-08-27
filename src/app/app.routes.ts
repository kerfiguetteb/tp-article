import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { TachesComponent } from './pages/taches/taches.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';

export const routes: Routes = 
[

    {path:"", redirectTo:"home", pathMatch:'full'},

    // https://xxxxx.com/{uri}
    {path:'home', component:HomeComponent},
    {path:'articles', component:ArticlesComponent},
    {path:'taches', component:TachesComponent},

    {path:"**", component:NotFoundComponent}
];
