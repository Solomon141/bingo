import React, { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      setUser(tg.initDataUnsafe.user);
    }
  }, []);

  return (
    <div>
      <h1>Welcome to Telegram Mini App</h1>
      {user ? (
        <div>
          <p>
            <strong>User ID:</strong> {user.id}
          </p>
          <p>
            <strong>First Name:</strong> {user.first_name}
          </p>
          <p>
            <strong>Last Name:</strong> {user.last_name}
          </p>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <img src={user.photo_url} alt="User profile" />
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default App;
