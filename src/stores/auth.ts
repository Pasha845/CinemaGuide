import { ref } from 'vue';
import axios from 'axios';
import { defineStore } from 'pinia';

export interface Profile {

}

export const useAuthStore = defineStore('auth', () => {
  const isAuth = ref(false);
  const profile = ref<Profile[]>([]);

  async function SignUp(signEmail: string, signPass: string, signName: string, signSurname: string) {
    try {
      await axios.post('https://cinemaguide.skillbox.cc/user', {
        email: signEmail,
        password: signPass,
        name: signName,
        surname: signSurname
        /* email: 'pasha.gorulev@gmail.com',
          password: '1212121212',
          name: 'Pasha',
          surname: 'Gorulev'
        */
      }, {
        withCredentials: true
      });
    } catch (error) {
      throw new Error('Error sign up');
    };
  };

  async function LogIn(logEmail: string, logPass: string) {
    try {
      await axios.post('https://cinemaguide.skillbox.cc/auth/login', {
        email: logEmail,
        password: logPass
      }, {
        withCredentials: true
      });
      isAuth.value = true;
    } catch (error) {
      throw new Error('Error log in');
    };
  };

  async function Profile() {
    try {
      const data = await fetch('https://cinemaguide.skillbox.cc/profile');
      const response = await data.json();
      profile.value = response;
    } catch(error) {
      throw new Error('Error loading data from profile');
    };
  };

  async function LoginOut() {
    try {
      await fetch('https://cinemaguide.skillbox.cc/auth/logout');
    } catch(error) {
      throw new Error('Error logout');
    };
  };

  return {SignUp, LogIn, isAuth, Profile, profile, LoginOut};
});