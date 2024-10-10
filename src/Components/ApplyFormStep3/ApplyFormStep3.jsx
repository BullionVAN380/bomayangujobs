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
                    <label htmlFor="country" className="form-label">County</label>
                    <select 
                        name="country" 
                        id="country" 
                        className="form-control" 
                        value={formData.country} 
                        onChange={handleInputChange} 
                        required
                    >
                          <option value="">Select an option</option>
                          <option value="baringo">Baringo</option>
                          <option value="bomet">Bomet</option>
                          <option value="bungoma">Bungoma</option>
                          <option value="busia">Busia</option>
                          <option value="elgeyo-marakwet">Elgeyo-Marakwet</option>
                          <option value="embu">Embu</option>
                          <option value="garissa">Garissa</option>
                          <option value="homa-bay">Homa Bay</option>
                          <option value="isiolo">Isiolo</option>
                          <option value="kajiado">Kajiado</option>
                          <option value="kakamega">Kakamega</option>
                          <option value="kericho">Kericho</option>
                          <option value="kiambu">Kiambu</option>
                          <option value="kilifi">Kilifi</option>
                          <option value="kirinyaga">Kirinyaga</option>
                          <option value="kisii">Kisii</option>
                          <option value="kisumu">Kisumu</option>
                          <option value="kitui">Kitui</option>
                          <option value="kwale">Kwale</option>
                          <option value="laikipia">Laikipia</option>
                          <option value="lamu">Lamu</option>
                          <option value="machakos">Machakos</option>
                          <option value="makueni">Makueni</option>
                          <option value="mandera">Mandera</option>
                          <option value="marsabit">Marsabit</option>
                          <option value="meru">Meru</option>
                          <option value="migori">Migori</option>
                          <option value="mombasa">Mombasa</option>
                          <option value="murang'a">Murang'a</option>
                          <option value="nairobi">Nairobi</option>
                          <option value="nakuru">Nakuru</option>
                          <option value="nandi">Nandi</option>
                          <option value="narok">Narok</option>
                          <option value="nyamira">Nyamira</option>
                          <option value="nyandarua">Nyandarua</option>
                          <option value="nyeri">Nyeri</option>
                          <option value="samburu">Samburu</option>
                          <option value="siaya">Siaya</option>
                          <option value="taita-taveta">Taita-Taveta</option>
                          <option value="tana-river">Tana River</option>
                          <option value="tharaka-nithi">Tharaka-Nithi</option>
                          <option value="trans-nzoia">Trans-Nzoia</option>
                          <option value="turkana">Turkana</option>
                          <option value="uasin-gishu">Uasin Gishu</option>
                          <option value="vihiga">Vihiga</option>
                          <option value="wajir">Wajir</option>
                          <option value="west-pokot">West Pokot</option>

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
