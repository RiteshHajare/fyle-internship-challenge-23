import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArrivalPageComponent } from './components/arrival-page/arrival-page.component';

//This is my case 
const routes: Routes = [
    {
        path: '',
        component: ArrivalPageComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }