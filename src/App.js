
import './css/App.css';

import React, { useState ,useEffect } from 'react';
import IntuitClient from './client/IntuitClient';
import Welcome from './components/Welcome';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import SignoutButton from './components/SignoutButton';
function App() {

  const intuitClient = new IntuitClient();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  // const [players, setPlayers] = useState([]);
  // const getPlayers = async () => {
  //   try {
  //     let newPlayers = {};
  //     const response =  await intuitClient.fetchData();
  //     console.log('response'+ response.content);
  //     newPlayers = response.content.map(d=> ({
  //       id: d.id,
  //       player: d.player,
  //       mat: d.mat,
  //       inns: d.inns,
  //       no: d.no,
  //       runs: d.runs,
  //       hs: d.hs,
  //       sr: d.sr,
  //       hundred: d.hundred,
  //       fifty: d.fifty
  //     })) 
  //     return newPlayers;
  //   } catch (error) {
  //     console.error('Error fetching tasks:', error);
  //   }
  // };

  const handleLogin = async (email, password) => {
    
    try {
      const response = await intuitClient.signIn({ email, password });
      console.log('handleLogin'+ response);
      if (response.status === 200) {
        setIsLoggedIn(true);
      } else {
        alert('Error logging in. Incorrect Credentials');
      }
    } catch (error) {
      alert('Error logging in. Please try again.');
    }
  };

  const handleSignup = async (firstName, lastName, email, password) => {
   
    try {
      const response = await intuitClient.signUp({ firstName, lastName, email, password });
      console.log(`Signup successful for ${firstName} ${lastName} with email ${email}`);
      setIsSignup(false);
    } catch (error) {
      alert('Error signing up. Please try again.');
    }

  };

  const handleSignout = () => {
    setIsLoggedIn(false);
  };


  // useEffect(() => {
  //   async function fetchData() {
  //      const newPlayers = await getPlayers();
  //      setPlayers(newPlayers);
  //   }
  //   fetchData();
  // }, []);


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Intuit Craft Demo
        </p>
      </header>
      
      {isLoggedIn ? (
        <>
        <Welcome />
        <SignoutButton onSignout={handleSignout} />
        </>
       
      ) : (
        isSignup ? (
          <SignupForm onSignup={handleSignup} />
        ) : (
          <LoginForm onLogin={handleLogin} />
        )
      )}
      {!isLoggedIn && (
        <div className="toggle-form">
          {isSignup ? (
            <p>
              Already have an account?{' '}
              <button onClick={() => setIsSignup(false)}>Login</button>
            </p>
          ) : (
            <p>
              Don't have an account?{' '}
              <button onClick={() => setIsSignup(true)}>Sign Up</button>
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
