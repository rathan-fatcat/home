// contexts/auth.js

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';
import { useRouter } from 'next/router';
import apiClient, {
  retrieveToken,
  saveAuthToken,
  clearAuthToken,
} from 'utils/apiClient';

const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  loading: true,
  login: (email, password) => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const loadUserFromToken = useCallback(async () => {
    try {
      const token = retrieveToken();
      if (token) {
        // retrive user info using token and get user using getUserByToken api
        // save user setUser({})
        const response = await apiClient.get(
          apiClient.URLS.getUserByToken,
          { token },
          true
        );
        if (response.success && response?.data?.user) {
          setUser(response.data.user);
        }
      }
    } catch (error) {
      console.error('unable to fetch user!');
      console.error(error);
    } finally {
      // stop loading when everthing is done.
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUserFromToken();
  }, []);

  const login = async (email, password) => {
    // login user with email and password using your login api
    // save token & user you receive from your login api
    // and replace to redirect route
    apiClient
      .post(apiClient.URLS.login, {
        email,
        password,
      })
      .then((response) => {
        if (response?.success) {
          const { token, user } = response;
          saveAuthToken(token);
          setUser(user);
          router.push('/redirect');
        } else {
          console.error('login failed');
        }
      })
      .catch((e) => {
        console.error('login failed');
        console.error(e);
      });
  };

  const logout = () => {
    // call logout api
    // clear token & reset user
    // and replace to redirect route
    apiClient
      .post(apiClient.URLS.logout, {}, true)
      .then((response) => {
        if (response?.success) {
          clearAuthToken();
          setUser(null);
          router.replace('/');
        } else {
          console.error('logout failed');
        }
      })
      .catch((e) => {
        console.error('logout failed');
        console.error(e);
      });
  };

  const isAuthenticated = !!user && !loading;

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, loading, logout }}
    >
      {isAuthenticated ? children : null}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
