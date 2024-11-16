import Typography from '@components/Typography';
import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    <div>
      <Typography as="h2">Dashboard</Typography>
      <Typography as="p">
        This is a protected route only accessible to authenticated users.
      </Typography>
    </div>
  );
};

export default DashboardPage;
