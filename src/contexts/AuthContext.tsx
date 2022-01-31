import React, 
{ 
  useState, 
  useEffect, 
  createContext, 
  ReactNode 
} from 'react';
import { Alert } from 'react-native';
import Decode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

import { showToast } from '../store/modules/toast/action';
import { api } from '../services/api';

interface SignInData {
  email: string;
  password: string;
}

interface UserCreate {
  name: string;
  email: string;
  avatar: File | string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: {
    url: string;
  };
  level: {
    level: number;
    experience: number;
    currentExperience: number;
    challengesCompleted: number;
  }
}

interface DecodeProps {
  email: string;
  name: string;
  avatar: {
    url: string;
  };
  level: {
    level: number;
    experience: number;
    currentExperience: number;
    challengesCompleted: number;
  }
  iat: number;
  exp: number;
  sub: string;
}

export interface Response {
  data: User;
}

interface AuthContextType {
  isAuthenticated: boolean;
  handleLogin: (data: SignInData) => Promise<void>
  handleLogout: () => void;
  handleCreateUser: (userData: UserCreate) => void;
  user: User;
}

interface AuthContextProvider {
  children: ReactNode;
  // user: User;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children, ...rest}: AuthContextProvider) {
  const [user, setUser] = useState<User | null>(null);
  const dispatch = useDispatch();

  const isAuthenticated = !!user;

  useEffect(() => {
    (async () => {
      const token = AsyncStorage.getItem('@moveit:token');

      if(token != null || undefined) {
        const decode = Decode(token) as DecodeProps;
        console.log("DECODE: ",decode)
        
        const response: Response = await api.get(`/users/${decode.sub}`);

        // console.log("GET: useEffect", response.data);

        isAuthenticated

        setUser(response.data);
      }
    })();
  }, [])

  async function handleLogin({ email, password }: SignInData) {
    try {
      const userData = {email, password}
      
      const { data: token } = await api.post('/login', userData);
      // console.log(token);

      const decode = Decode(token) as DecodeProps;

      const userRecover = {
        id: decode.sub,
        name: decode.name,
        email: decode.email,
        avatar: {
          url: decode.avatar.url,
        },
        level: {
          level: decode.level.level,
          currentExperience: decode.level.currentExperience,
          challengesCompleted: decode.level.challengesCompleted
        }
      }

      const storageToken = await AsyncStorage.setItem('@moveit:token', token);
      console.log("Storage Token: ", storageToken);

      setUser(userRecover);

      isAuthenticated

      const toast = {
        message: `Bem vindo ${userRecover.name}! 🎮`,
        iconName: 'check',
        type: 'success',
        duration: 2000
      };
      dispatch(showToast(toast));

    } catch (err) {
      const toast = {
        message: 'Email ou senha inválidos',
        iconName: 'close',
        type: 'error',
        duration: 2000
      };
      dispatch(showToast(toast))
      throw new Error("Email ou senha inválidos");
    }
  }

  async function handleCreateUser({ name, email, password, avatar }: UserCreate) {
    const data = new FormData();

    data.append('name', name);
    data.append('email', email);
    data.append('password', password);
    data.append('avatar', avatar);
    
    try {
      await api.post('/users', data);


    } catch(err) {
      const toast = {
        message: 'Algo deu errado.',
        iconName: 'close',
        type: 'error',
        duration: 2000
      };
      dispatch(showToast(toast));
      throw new Error(err);
    }
  }

  function handleLogout() {
    // Cookie.remove('MoveIt.token');
    // api.defaults.headers['Authorization'] = undefined;
    // toast.success('sessão encerrada.')
    // Router.push('/');
  }

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      handleCreateUser,
      handleLogin,
      handleLogout,
      user
    }}>
      {children}
    </AuthContext.Provider>
  );
}