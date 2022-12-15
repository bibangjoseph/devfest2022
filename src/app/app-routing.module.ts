import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: "Page Accueil"
    },
    {
        path: 'contact',
        component: ContactComponent,
        title: 'Page Contact'
    },
    {
        path: 'movies',
        component: MoviesComponent,
        title: 'Page Films'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
