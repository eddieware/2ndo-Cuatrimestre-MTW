//1
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//2
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';

//3
const appRoutes: Routes = [
	{path: '', component: AboutComponent},
	{path: 'sobre-mi', component: AboutComponent},
	{path: 'proyectos', component: ProjectsComponent},
	{path: 'crear-proyecto', component: CreateComponent},
	{path: 'contacto', component: ContactComponent},
	{path: '**', component: ErrorComponent}
];

//4
export const appRoutingProviders: any[]=[];

//5
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);