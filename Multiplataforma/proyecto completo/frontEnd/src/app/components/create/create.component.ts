import { Component, OnInit } from '@angular/core';

import { Project} from '../../models/project';
import {ProjectService} from '../../services/project.service';
import {Global} from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[ProjectService]
})

export class CreateComponent implements OnInit {

  public title: string;
  public project: Project;

  constructor(private _projectService: ProjectService) { 
    this.title  = "Proyecto Nuevo";
    this.project = new Project('','','','',1975,'','');
    }

  ngOnInit() {
  }
  onSubmit(from){
    console.log(this.project);
    this._projectService.saveProject(this.project)
  }
  // falta codigo


}
