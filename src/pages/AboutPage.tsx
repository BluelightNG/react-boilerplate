import Typography from '@components/Typography';
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div>
      <Typography as="h2">About Us</Typography>
      <Typography as="p">
        This is an unprotected route accessible to all users.
      </Typography>
    </div>
  );
};

export default AboutPage;
