import { Routes } from '@angular/router';
import { SquareComponent } from './square/square.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    {
        path: 'home',
        component: HomeComponent,
        
    },
    {
        path: 'square',
        component: SquareComponent,
    }
];
