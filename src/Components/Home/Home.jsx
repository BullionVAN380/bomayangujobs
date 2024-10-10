import React, { useState, useEffect } from 'react';
import Project1 from "../../assets/project1.jpg"
import Project2 from "../../assets/project2.jpg"
import Project3 from "../../assets/project3.jpg"

function Home() {
 
    const [headerText, setHeaderText] = useState('Welcome to Boma Yangu');

    useEffect(() => {
        // Array of texts to flip through
        const headerOptions = [
            'Welcome to Boma Yangu',
            'Available Jobs',
            'Your Home, Your Future',
        ];

        // Function to flip header text every 5 seconds
        const flipHeaderText = () => {
            setHeaderText((prevText) => {
                // Find the next text in the array
                const currentIndex = headerOptions.indexOf(prevText);
                const nextIndex = (currentIndex + 1) % headerOptions.length; // Cycle through
                return headerOptions[nextIndex];
            });
        };

        // Set interval to change header every 5 seconds (5000 ms)
        const intervalId = setInterval(flipHeaderText, 5000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures it runs once

  return (
    <div>
      {/* Header */}
            <header className="bg-primary text-white text-center py-4">
                <h1>{headerText}</h1> {/* Dynamic Header */}
                <p>Affordable housing for all Kenyans</p>
            </header>

    {/* Main Content */}
    <main className="container mt-5">
        {/* Welcome Section */}
        <section className="text-center mb-5">
            <h2>Our Mission</h2>
            <p className="lead">Providing affordable, quality housing under the Boma Yangu program for all Kenyans.</p>
        </section>

        {/* Featured Projects Section */}
        <section>
            <h2 className="text-center mb-4">Featured Projects</h2>
            <div className="row">
                {/* Sample Project 1 */}
                <div className="col-md-4 mb-4">
                    <div className="card shadow-sm">
                        <img src={Project1} className="card-img-top" alt="Project 1" />
                        <div className="card-body">
                            <h5 className="card-title">Kwale affordable housing project</h5>
                            <p className="card-text">100 workers needed. Contact Project Manager: +254700123456</p>
                            <a href="#" className="btn btn-primary">View Project</a>
                        </div>
                    </div>
                </div>

                {/* Sample Project 2 */}
                <div className="col-md-4 mb-4">
                    <div className="card shadow-sm">
                        <img src={Project2} className="card-img-top" alt="Project 2" />
                        <div className="card-body">
                            <h5 className="card-title">Kilifi pool house affordable housing</h5>
                            <p className="card-text">50 workers needed. Contact Contractor: +254701234567</p>
                            <a href="#" className="btn btn-primary">View Project</a>
                        </div>
                    </div>
                </div>

                {/* Sample Project 3 */}
                <div className="col-md-4 mb-4">
                    <div className="card shadow-sm">
                        <img src={Project3} className="card-img-top" alt="Project 3" />
                        <div className="card-body">
                            <h5 className="card-title">Mombasa affordable housing project (Mombasa 2), Mombasa County</h5>
                            <p className="card-text">80 workers needed. Contact Contractor: +254702345678</p>
                            <a href="#" className="btn btn-primary">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    {/* Footer */}
    <footer className="bg-light text-center py-3 mt-5">
        <p>&copy; 2024 Boma Yangu Program | Contact us: info@bomayangu.go.ke | +254700123456</p>
    </footer>
</div>
);
  
}

export default Home
