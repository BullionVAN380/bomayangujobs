import React from 'react'

function ProjectCard({ project }) {
  return (
    <div className="card mb-4 shadow-sm">
      <img src={project.image} className="card-img-top" alt={project.title} />
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text"><strong>Status:</strong> {project.status}</p>
        <p className="card-text"><strong>Workers Needed:</strong> {project.workersNeeded}</p>
        <p className="card-text"><strong>Project Manager Contact:</strong> <a href={`mailto:${project.projectManagerContact}`}>{project.projectManagerContact}</a></p>
        <p className="card-text"><strong>Contractor Contact:</strong> <a href={`mailto:${project.contractorContact}`}>{project.contractorContact}</a></p>
        <button className="btn btn-primary" onClick={() => alert('Add your contact functionality here')}>Add Your Contact</button>
      </div>
    </div>
  )
}

export default ProjectCard
