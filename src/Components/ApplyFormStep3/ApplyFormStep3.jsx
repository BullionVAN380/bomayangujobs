import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function ApplyFormStep3({ formData, updateFormData }) {
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    updateFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
    });
};

const navigate = useNavigate();
const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/salaries');
};

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
                <h2 className="mb-4">Answer these questions from the employer</h2>

                <div className="mb-3">
                    <label htmlFor="country" className="form-label">Country</label>
                    <select 
                        name="country" 
                        id="country" 
                        className="form-control" 
                        value={formData.country} 
                        onChange={handleInputChange} 
                        required
                    >
                        <option value="">Select an option</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        {/* Add more options as needed */}
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                    <input 
                        type="tel" 
                        name="phoneNumber" 
                        id="phoneNumber" 
                        className="form-control" 
                        placeholder="Phone number" 
                        value={formData.phoneNumber} 
                        onChange={handleInputChange} 
                        required 
                    />
                </div>

                <div className="mb-3 form-check">
                    <input 
                        type="checkbox" 
                        name="receiveTexts" 
                        id="receiveTexts" 
                        className="form-check-input" 
                        checked={formData.receiveTexts} 
                        onChange={handleInputChange} 
                    />
                    <label htmlFor="receiveTexts" className="form-check-label">
                        I would like to receive text messages about my job application
                    </label>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default ApplyFormStep3;
