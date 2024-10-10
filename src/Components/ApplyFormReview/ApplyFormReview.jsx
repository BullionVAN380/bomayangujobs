import React from 'react'
import { useNavigate } from 'react-router-dom';

function ApplyFormReview({ formData }) {

    const navigate = useNavigate();

    const handleSubmit = () => {
        // Final submission logic (e.g., send data to the server)
        console.log('Final form data submitted:', formData);

        // Navigate to a success page or somewhere else
        navigate('/success');
    };
    const handleGoBack = () => {
        navigate('/questions'); // Go back to the last step to make edits
    };
  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
        <div className="col-12 col-lg-6"> {/* Full width on small screens, 50% on large screens */}
            <h2 className="mb-4">Review Your Information</h2>
            <ul className="list-group mb-4">
                <li className="list-group-item"><strong>First Name:</strong> {formData.firstName || 'N/A'}</li>
                <li className="list-group-item"><strong>Last Name:</strong> {formData.lastName || 'N/A'}</li>
                <li className="list-group-item"><strong>Email:</strong> {formData.email || 'N/A'}</li>
                <li className="list-group-item"><strong>Phone:</strong> {formData.phone || 'N/A'}</li>
                <li className="list-group-item"><strong>Country:</strong> {formData.country || 'N/A'}</li>
                <li className="list-group-item"><strong>Receive Texts:</strong> {formData.receiveTexts ? 'Yes' : 'No'}</li>
                <li className="list-group-item"><strong>Desired Salary:</strong> {formData.salary || 'N/A'}</li>
                <li className="list-group-item"><strong>Salary Type:</strong> {formData.salaryType || 'N/A'}</li>
                <li className="list-group-item"><strong>Currency:</strong> {formData.currency || 'N/A'}</li>
            </ul>

            <button className="btn btn-secondary me-2" onClick={handleGoBack}>Go Back</button>
            <button className="btn btn-primary" onClick={handleSubmit}>Submit Application</button>
        </div>
    </div>
</div>


  )
}

export default ApplyFormReview
