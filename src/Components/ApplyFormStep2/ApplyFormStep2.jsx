import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function ApplyFormStep2({ formData, updateFormData }) {
    const [resume, setResume] = useState(null);
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        setResume(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform resume submission logic here (e.g., API call)
        console.log('Resume uploaded:', resume);

        // Navigate to the next step (questions from the employer)
        navigate('/questions'); 
    };

    return (
      <div className="container mt-5"> {/* Bootstrap container for responsiveness */}
      <div className="row justify-content-center">
          <div className="col-12 col-lg-6"> {/* Full width on small screens, 50% on large screens */}
              <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
                  <h2 className="mb-4">Add a resume for the employer</h2>
                  
                  <div className="mb-3">
                      <label htmlFor="resume" className="form-label">Upload Resume</label>
                      <input 
                          type="file" 
                          name="resume" 
                          id="resume" 
                          className="form-control" 
                          onChange={handleFileChange} 
                          required 
                      />
                  </div>
  
                  <button type="submit" className="btn btn-primary">Continue</button>
              </form>
          </div>
      </div>
  </div>
  
    );
}

export default ApplyFormStep2;
