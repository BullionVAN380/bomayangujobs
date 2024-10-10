import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ApplyFormStep4({ formData = {}, updateFormData }) {
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (typeof updateFormData === 'function') {
            updateFormData({
                ...formData,
                [name]: value
            });
        } else {
            console.error("updateFormData is not a function");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        navigate('/review');  // Navigate to review page
    };

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
            <h2 className="mb-4">Answer these questions from the employer</h2>

<div className="mb-3">
    <label className="form-label">Do you have low voltage experience?</label>
    <div>
        <input 
            type="radio" 
            name="lowVoltageExperience" 
            value="Yes" 
            onChange={handleInputChange} 
            checked={formData.lowVoltageExperience === 'Yes'} // Ensure proper checking
        /> Yes
    </div>
    <div>
        <input 
            type="radio" 
            name="lowVoltageExperience" 
            value="No" 
            onChange={handleInputChange} 
            checked={formData.lowVoltageExperience === 'No'}
        /> No
    </div>
</div>

<div className="mb-3">
    <label className="form-label">What is your desired salary? (optional)</label>
    <div>
        <input 
            type="radio" 
            name="desiredSalaryType" 
            value="Annually" 
            onChange={handleInputChange} 
            checked={formData.desiredSalaryType === 'Annually'}
        /> Annually
    </div>
    <div>
        <input 
            type="radio" 
            name="desiredSalaryType" 
            value="Hourly" 
            onChange={handleInputChange} 
            checked={formData.desiredSalaryType === 'Hourly'}
        /> Hourly
    </div>
</div>

<div className="mb-3">
    <label htmlFor="salaryAmount" className="form-label">Please enter the amount (optional)</label>
    <input 
        type="number" 
        name="salaryAmount" 
        id="salaryAmount" 
        className="form-control" 
        placeholder="Enter amount" 
        value={formData.salaryAmount || ''} // Set fallback value to empty string
        onChange={handleInputChange}
    />
</div>

<div className="mb-3">
    <label htmlFor="currencyType" className="form-label">Select currency type (optional)</label>
    <select 
        name="currencyType" 
        id="currencyType" 
        className="form-control" 
        value={formData.currencyType || ''} // Set fallback value to empty string
        onChange={handleInputChange}
    >
        <option value="">Select an option</option>
        <option value="KSH">KSH</option>
        <option value="USD">USD</option>
        <option value="URO">URO</option>
    </select>
</div>

<button type="submit" className="btn btn-primary">Continue</button>
            </form>
        </div>
    );
}
export default ApplyFormStep4;
