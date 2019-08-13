import{Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Project } from '../models/project';
import {Global } from './global';


@Injectable()
export class ProjectService{
    public url: string;
    constructor(private _http: HttpClient){
        this.url = Global.url;

    }

    saveProject(project: Project): Observable<any>{
    let params = JSON.stringify(project);
    let headers = new HttpHeaders().set('Content.type')
    //falta codigo
    }
}