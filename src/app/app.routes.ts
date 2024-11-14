import { Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: '', redirectTo: '/overview', pathMatch: 'full' },
    {path: 'overview', component: OverviewComponent},
    {path: 'about',    component: AboutComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'contact',  component: ContactComponent}
];
