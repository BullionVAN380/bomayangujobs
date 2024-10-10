import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const JobDetail = ({ job }) => {
  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>{job.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{job.county}</Card.Subtitle>
          <Card.Text>{job.description}</Card.Text>
          <Button as={Link} to={`/apply/${job.id}`} variant="success">Apply Now</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default JobDetail;
