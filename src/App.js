import React, { useEffect, useState } from 'react';
import Registration from './Components/Registration';
import { auth } from './Components/firebase';
import Home from './Components/Home';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setCurrentUser({
          uid: user.uid,
          email: user.email
        });
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  return (
    <div>
      {currentUser ? <Home currentUser={currentUser} /> : <Registration />}
    </div>
  );
}

export default App;
