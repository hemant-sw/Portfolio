import React from 'react';
import Separator from '../../common/separator/Separator';
import { ProjectData } from '../../data/project';
import ProjectCard from './ProjectCard';
import './projects.css';

export default function Projects() {
  const data = ProjectData;
  return (
     <div className="projects">
      <Separator/>
    <label className="section-title">Projects</label>
    <div>
      {data.map((project)=>{
        return <ProjectCard project={project}/>;

      })}

    </div>
  </div>
  );
}
