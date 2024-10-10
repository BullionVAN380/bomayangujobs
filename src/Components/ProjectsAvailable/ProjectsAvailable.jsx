import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard';
import Project1 from "../../assets/project1.jpg"
import Project2 from "../../assets/project2.jpg"
import Project3 from "../../assets/project3.jpg"


function ProjectsAvailable() {
   
    const projects = [
        {
          id: 1,
          title: 'Kwale affordable housing project',
          image: Project1,
          status: 'Ongoing',
          workersNeeded: 10,
          projectManagerContact: 'pm1@kasimalo.com',
          contractorContact: 'contractor1@lupio.com',
        },
        {
          id: 2,
          title: 'Kilifi pool house affordable housing',
          image: Project2,
          status: 'Upcoming',
          workersNeeded: 5,
          projectManagerContact: 'pm2@kazibure.com',
          contractorContact: 'contractor2@mosare.com',
        },
        {
            id: 3,
            title: 'Mombasa affordable housing project (Mombasa 2), Mombasa County',
            image: Project3,
            status: 'Upcoming',
            workersNeeded: 5,
            projectManagerContact: 'pm2@mumbai.com',
            contractorContact: 'contractor2@phionno.com',
          },
     
      ];

  return (
    <div className="container mt-5">
   <h2 className="mb-4 text-center">Available Projects Under Boma Yangu Program</h2>
    <div className="row">
      {projects.map((project) => (
        <div className="col-md-4" key={project.id}>
         <ProjectCard project={project} />
        </div>
      ))}
    </div>
  </div>
  )
}

export default ProjectsAvailable
