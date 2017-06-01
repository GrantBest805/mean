import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'create', component: CreateComponent},
    { path: 'view/:id', component: ViewComponent},
    
];
export const routing = RouterModule.forRoot(APP_ROUTES);