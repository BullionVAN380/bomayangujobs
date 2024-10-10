import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './Components/Navbar';
import JobList from './Components/JobList/JobList';
import JobDetail from './Components/JobDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import ApplyFormStep1 from './Components/ApplyFormStep1/ApplyFormStep1';
import ApplyFormStep2 from './Components/ApplyFormStep2/ApplyFormStep2';
import ApplyFormStep3 from './Components/ApplyFormStep3/ApplyFormStep3';
import ApplyFormStep4 from './Components/ApplyFormStep4/ApplyFormStep4';
import ApplyFormReview from './Components/ApplyFormReview/ApplyFormReview';

// Sample job data for demonstration
const jobsData = [
  { id: 1, title: 'Site Manager', county: 'Nairobi', description: 'Manage a construction site...' },
  { id: 2, title: 'Electrician', county: 'Mombasa', description: 'Install and maintain electrical systems...' },
  { id: 3, title: 'Plumber', county: 'Kisumu', description: 'Install plumbing systems...' }
];

const App = () => {
  const [jobs] = useState(jobsData);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    receiveTexts: false,
    salary: '',
    salaryType: '',
    currency: ''
  });

  const updateFormData = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  return (
    <Router>
      <NavigationBar />
      <Routes>
        {/* Job List route */}
        <Route path="/jobs" element={<JobList jobs={jobs} />} />

        {/* Job Detail route with dynamic parameter */}
        <Route path="/jobs/:id" element={<JobDetailWrapper jobs={jobs} />} />
        
        {/* Register route */}
        <Route path="/register" element={<RegistrationForm />} />

        {/* Apply Form routes */}
        <Route path="/apply" element={<ApplyFormStep1 formData={formData} updateFormData={updateFormData} />} />
        <Route path="/add-resume" element={<ApplyFormStep2 formData={formData} updateFormData={updateFormData} />} />
       <Route path="/questions" element={<ApplyFormStep3 formData={formData} updateFormData={updateFormData} />} />
       <Route path="/salaries" element={<ApplyFormStep4 formData={formData} updateFormData={updateFormData} />} />
       <Route path="/review" element={<ApplyFormReview formData={formData} />} />

      </Routes>
    </Router>
  );
};

// JobDetailWrapper to handle dynamic route for JobDetail
const JobDetailWrapper = ({ jobs }) => {
  const { id } = useParams(); // Getting the dynamic job ID from the URL
  const job = jobs.find((j) => j.id === parseInt(id));

  return job ? <JobDetail job={job} /> : <h3>Job not found</h3>;
};

export default App;
