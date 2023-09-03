import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="p-4 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">My Profile</h2>
        <img
          src={user.picture}
          alt="Profile"
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />
        <p className="text-gray-600 text-center">{user.name}</p>
        <p className="text-gray-500 text-center">{user.email}</p>
      </div>
    )
  );
};

export default Profile;
