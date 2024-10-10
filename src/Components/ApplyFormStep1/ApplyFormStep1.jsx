import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import 'bootstrap/dist/css/bootstrap.min.css'; 

function ApplyFormStep1({ formData, updateFormData }) {

  const navigate = useNavigate();

  const handleInputChange = (e) => {
      updateFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      navigate('/add-resume'); 
  };

    return (
        <div className="container mt-5"> {/* Bootstrap container for responsiveness */}
            <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm"> {/* Form styling */}
                <h2 className="mb-4">Add your contact information</h2> {/* Form title */}
                
                <div className="mb-3"> {/* Form group for first name */}
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input 
                        type="text" 
                        name="firstName" 
                        id="firstName" 
                        className="form-control" 
                        placeholder="First name" 
                        value={formData.firstName} 
                        onChange={handleInputChange} 
                        required 
                    />
                </div>
                
                <div className="mb-3"> {/* Form group for last name */}
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input 
                        type="text" 
                        name="lastName" 
                        id="lastName" 
                        className="form-control" 
                        placeholder="Last name" 
                        value={formData.lastName} 
                        onChange={handleInputChange} 
                        required 
                    />
                </div>

                <div className="mb-3"> {/* Form group for email */}
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        className="form-control" 
                        placeholder="Email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        required 
                    />
                </div>

                <div className="mb-3"> {/* Form group for phone number */}
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input 
                        type="tel" 
                        name="phone" 
                        id="phone" 
                        className="form-control" 
                        placeholder="Phone number" 
                        value={formData.phone} 
                        onChange={handleInputChange} 
                        required 
                    />
                </div>
                
                <button type="submit" className="btn btn-primary">Continue</button> {/* Submit button */}
            </form>
        </div>
    );
}

export default ApplyFormStep1;
