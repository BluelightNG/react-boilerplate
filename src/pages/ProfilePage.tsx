import Typography from '@components/Typography';
import React from 'react';

const ProfilePage: React.FC = () => {
  return (
    <div>
      <Typography as="h2">Profile</Typography>
      <Typography as="p">
        This is a protected route only accessible to authenticated users.
      </Typography>
    </div>
  );
};

export default ProfilePage;
