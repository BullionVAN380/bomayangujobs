import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const JobsAvails = ({ jobTitle, description, county, publishedDate, applicationDeadline, jobCategory, qualifications, contactEmail ,...props}) => {
    const [isRegistered, setIsRegistered] = useState(true); 
    const navigate = useNavigate();
  
    const handleApplyClick = () => {
      if (isRegistered) {
        navigate('/apply'); 
      } else {
        navigate('/register'); 
      }
    };

  return (
    <div className="container mt-5"> {/* Bootstrap container for responsiveness */}
    <div className="row justify-content-center">
        <div className="col-12 col-lg-9"> {/* Full width on small screens, 50% on large screens */}
            <div className="card mb-4 shadow-sm"> 
                <div className="card-body">
                    <h5 className="card-title">{jobTitle}</h5> 
                    <p className="card-text"><strong>Location:</strong> {county}</p>
                    <p className="card-text"><strong>Published:</strong> {publishedDate}</p>
                    <p className="card-text"><strong>Deadline:</strong> {applicationDeadline}</p>
                    <p className="card-text"><strong>Category:</strong> {jobCategory}</p>
                    <p className="card-text"><strong>Description:</strong> {description}</p>
                    <p className="card-text"><strong>Qualifications:</strong></p>
                    <ul className="list-group list-group-flush">
                        {qualifications.map((qualification, index) => (
                            <li key={index} className="list-group-item">{qualification}</li> 
                        ))}
                    </ul>
                    <p className="card-text"><strong>Contact Email:</strong> <a href={`mailto:${contactEmail}`} className="text-primary">{contactEmail}</a></p>
                    <a onClick={handleApplyClick} className="btn btn-primary mt-3">Apply Online</a> 
                </div>
            </div>
        </div>
    </div>
</div>

  );
};

export default JobsAvails;
