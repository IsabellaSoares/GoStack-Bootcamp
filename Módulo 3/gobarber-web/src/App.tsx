import React from 'react';

import { AuthProvider } from './hooks/AuthContext';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ToastContainer from './components/ToastContainer'

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    {/* <SignUp /> */}

    <ToastContainer />

    <GlobalStyle />
  </>
);

export default App;
