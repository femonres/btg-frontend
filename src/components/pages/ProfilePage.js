import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ProfileForm from '../organisms/ProfileForm';
import { getUserById } from '../../services/userService';

const ProfilePage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserById(userId).then((response) => {
      setUser(response.data);
    });
  }, [userId]);

  const handleSave = (updatedUser) => {
    setUser(updatedUser);
  };

  const handleReset = () => {
    getUserById(userId).then((response) => {
      setUser(response.data);
    });
  };

  return (
    <Container>
      <h1>User Profile</h1>
      {user && (
        <ProfileForm user={user} onSave={handleSave} onReset={handleReset} />
      )}
    </Container>
  );
};

export default ProfilePage;