import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumsComponent } from './albums/albums.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { loggedInGuard } from './services/logged-in.guard';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'artists', component: ArtistComponent, canActivate: [loggedInGuard]},
    {path: 'albums/:id', component: AlbumsComponent, canActivate: [loggedInGuard]},
    {path: 'login', component: LoginFormComponent},
    {path: '**', component: NotFoundComponent}
];
