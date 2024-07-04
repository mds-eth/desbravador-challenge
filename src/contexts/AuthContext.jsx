import { createContext, useContext, useState } from 'react';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {

  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storagedToken = localStorage.getItem('[@auth-session]')

    if (storagedToken) {
      return true;
    }
    return false;
  });

  const handleCreateSession = async (data) => {

    setLoading(true);

    setIsAuthenticated(true);

    const session = JSON.stringify(data);

    setToken(session);

    localStorage.setItem('[@auth-session]', session)

    return true;
  };

  const logout = () => {

    setToken('');
    setIsAuthenticated(false);

    localStorage.removeItem('[@auth-session]');

    window.location.href = '/';
  };

  return (
    <SessionContext.Provider value={{ loading, handleCreateSession, isAuthenticated, token, logout }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionContext = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSessionContext must be used within a SessionProvider');
  }
  return context;
};