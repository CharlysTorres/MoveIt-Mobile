import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const token = AsyncStorage.getItem('@moveit:token');

export const api = axios.create({
  baseURL: 'http://192.168.0.106:3333',
});

// if (token) {
//   api.defaults.headers['Authorization'] = `Bearer ${token}`; 
// }