import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './Components/Navbar/Navbar';
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
import ProjectsAvailable from './Components/ProjectsAvailable/ProjectsAvailable';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Home from './Components/Home/Home';

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


  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track login state

 

  return (
    <Router>
    <NavigationBar />
    <Routes>
      {/* Public Routes */}
      <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} />} />
      <Route path='/register' element={<RegistrationForm />} />
      <Route path='/' element={<Home />} />

      {/* Protected Routes */}
      <Route
        path="/jobs"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <JobList jobs={jobs} />
          </PrivateRoute>
        }
      />
      <Route
        path="/jobs/:id"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <JobDetailWrapper jobs={jobs} />
          </PrivateRoute>
        }
      />
      <Route
        path="/projects"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <ProjectsAvailable />
          </PrivateRoute>
        }
      />
      
      {/* Apply Form Steps Protected */}
      <Route
        path="/apply"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <ApplyFormStep1 formData={formData} updateFormData={updateFormData} />
          </PrivateRoute>
        }
      />
      <Route
        path="/add-resume"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <ApplyFormStep2 formData={formData} updateFormData={updateFormData} />
          </PrivateRoute>
        }
      />
      <Route
        path="/questions"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <ApplyFormStep3 formData={formData} updateFormData={updateFormData} />
          </PrivateRoute>
        }
      />
      <Route
        path="/salaries"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <ApplyFormStep4 formData={formData} updateFormData={updateFormData} />
          </PrivateRoute>
        }
      />
      <Route
        path="/review"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <ApplyFormReview formData={formData} />
          </PrivateRoute>
        }
      />
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
